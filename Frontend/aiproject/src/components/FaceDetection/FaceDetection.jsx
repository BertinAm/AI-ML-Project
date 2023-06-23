import React from 'react'
import './FaceDetection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import {faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

const FaceDetection = () => {
  return (
    <div className='main'>
        <p className="header">Test Out our Face Detection Algorithm </p>
        <div className="labels">
            <div className="labelleft"> 
                <p className='labeltext' >input</p>
                <div className="input">
               <FontAwesomeIcon icon={faCloudArrowUp} className='labelicon' /> 
               <p className='labeltext1' >To perform Face Detection</p>
                <p className='labeltext1' >Drag and Drop the image  here or click
                 on the below to upload an image </p>
                </div>
            </div>
            <div className="labelright">
            <p className='labeltext'>output</p>
            <div className="input"> </div>
            </div>
        </div>
        <div className="bittondiv">
          <button className="button">
          <FontAwesomeIcon icon={faArrowUpFromBracket } className='btnicon' /> 
          <p className="btntext">Upload</p>
          </button>
        </div>
    </div>
  )
}

export default FaceDetection