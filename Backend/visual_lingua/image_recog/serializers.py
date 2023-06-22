from rest_framework import serializers


class ImageSerializer(serializers.Serializer):
    image = serializers.ImageField()


class OutputImageSerializer(serializers.Serializer):
    output_image = serializers.CharField()
