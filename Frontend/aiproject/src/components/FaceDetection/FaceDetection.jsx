import React from 'react'
import './FaceDetection.css'
const FaceDetection = () => {
  return (
    <div className='main'>
        <p className="header">Test Out our Face Detection Algorithm </p>
        <div className="labels">
            <div className="labelleft">
                <p>input</p>
                <div className="input">
               <input type="file" className='picinput' />
                </div>
            </div>
            <div className="labelright">
            <p>output</p>
            <div className="input">nnnnn</div>
            </div>
        </div>
    </div>
  )
}

export default FaceDetection