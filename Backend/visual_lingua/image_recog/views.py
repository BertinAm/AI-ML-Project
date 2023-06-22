import cv2
import numpy as np
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from .serializers import ImageSerializer, OutputImageSerializer
from .model import create_model

# Load the pre-trained face detection model
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')


def extract_faces(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
    extracted_faces = []
    for (x, y, w, h) in faces:
        face = image[y:y + h, x:x + w]
        extracted_faces.append(face)
    return extracted_faces


class ImageUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            image = cv2.imdecode(np.frombuffer(serializer.validated_data['image'].read(), np.uint8),
                                 cv2.IMREAD_UNCHANGED)

            output_image = self.process_image(image)

            # Save the output image
            output_path = 'image_recog/static/output.jpg'
            cv2.imwrite(output_path, output_image)

            # Return the path to the output image as a JSON response
            output_serializer = OutputImageSerializer({'output_image': output_path})
            return JsonResponse(output_serializer.data)
        return JsonResponse(serializer.errors, status=400)

    def process_image(self, image):
        # Step 2: Gather and preprocess the dataset
        dataset_dir = 'path_to_dataset_directory'  # Replace with the actual path to your dataset directory

        # Process each image in the dataset
        X = []  # List to store the face images
        y = []  # List to store the corresponding labels

        import os
        for file_name in os.listdir(dataset_dir):
            file_path = os.path.join(dataset_dir, file_name)
            image = cv2.imread(file_path)
            faces = extract_faces(image)
            for face in faces:
                resized_face = cv2.resize(face, (100, 100))
                X.append(resized_face)
                y.append(file_name.split('.')[0])  # Use the file name (without extension) as the label

        # Convert the lists to arrays
        X = np.array(X)
        y = np.array(y)

        # Normalize the pixel values
        X = X / 255.0

        # Split the dataset into training and validation sets
        X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

        # Step 3: Train the convolutional neural network (CNN)
        num_classes = len(np.unique(y_train))  # Number of individuals in the dataset

        # Create the CNN model
        model = create_model((100, 100, 3), num_classes)

        # Compile the model
        model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

        # Train the model
        model.fit(X_train, y_train, epochs=10, validation_data=(X_val, y_val))

        # Step 4: Test the trained CNN on new images
        test_image = image
        faces = extract_faces(test_image)

        # Iterate through each detected face
        for i, face in enumerate(faces):
            # Preprocess the face image
            resized_face = cv2.resize(face, (100, 100))
            normalized_face = resized_face / 255.0
            reshaped_face = np.reshape(normalized_face, (1, 100, 100, 3))

            # Make predictions
            predictions = model.predict(reshaped_face)
            predicted_class_index = np.argmax(predictions)
            predicted_class_label = np.unique(y_train)[predicted_class_index]

            # Draw bounding box and label on the original image
            (x, y, w, h) = face_cascade.detectMultiScale(test_image, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))[
                i]
            cv2.rectangle(test_image, (x, y), (x + w, y + h), (0, 255, 0), 2)
            cv2.putText(test_image, predicted_class_label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)

        # Return the output image
        return test_image
