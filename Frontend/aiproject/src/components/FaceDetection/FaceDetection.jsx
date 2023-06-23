import React, { useRef, useState, useMemo } from "react";
import "./FaceDetection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const FaceDetection = () => {
  const inputRef = useRef();
  const [active, setActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    if(e.dataTransfer){
      console.log(e.dataTransfer.files[0])
      setFile(e.dataTransfer.files[0]);
    }else{
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }

    setActive(true);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleInputChange(e);
  };

  const handleDefault = (e, state) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(state);
  }

  const styeClass = useMemo(() => {
    if(active){
      return 'input_active'
    }
    else {
      return ''
    }
  }, [active])

  return (
    <div className="main">
      <p className="header">Test Out our Face Detection Algorithm </p>
      <div className="labels">
        <div className="labelleft">
          <p className="labeltext">input</p>
          <div className={`input ${styeClass}`} onDrop={handleFileDrop} onClick={() => inputRef?.current.click()} onDragOver={(e) => handleDefault(e, true)} onDragLeave={(e) => handleDefault(e, false)}>
            <FontAwesomeIcon icon={faCloudArrowUp} className="labelicon" />
            <p className="labeltext1">To perform Face Detection</p>
            <p className="labeltext1">
              {
                file? file?.name : "Drag and Drop the image here or click on the below to upload an image"
              }
            </p>
            <input type="file" accept="image/*" ref={inputRef} onChange={handleInputChange} />
          </div>
        </div>
        <div className="labelright">
          <p className="labeltext">output</p>
          <div className="input"> </div>
        </div>
      </div>
      <div className="bittondiv">
        <button className="button" disabled={!file}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="btnicon" />
          <p className="btntext">Upload</p>
        </button>
      </div>
    </div>
  );
};

export default FaceDetection;
