import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Card = (props) => {
  
  return (
    <main className="cards" style={props.style} > 
        <div className="illustration"><img src={props.src} alt="" className="tllustrate" />    </div>
        <p className="text">{props.text}</p>
        <FontAwesomeIcon icon={faArrowRight} className='iconx' /> 
    </main>
  )
}

export default Card