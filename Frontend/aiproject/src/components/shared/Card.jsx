import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
  return (
    <main className="cards" style={props.style} >
        <p className="text">{props.text}</p>
        <div className="icon">
        <FontAwesomeIcon icon={faArrowRight} className='iconx' />
        </div>
    </main>
  )
}

export default Card