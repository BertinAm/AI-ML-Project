import React from 'react'
import Card from '../shared/Card'

const Hero = () => {
  return (
   <main className='Hero' >
    <p className="hero1">WELCOME  TO </p>
    <h1 className="hero2">Visual-Lingual</h1>
    <section className="card-section">
        {/* <div className="card1"> */}
            <Card text="Face detection" 
            style={{
                paddingTop:'2em',
                paddingLeft:'5em',
                paddingBottom:'2em',
                paddingRight:'5em'
             }} />
             {/* </div> */}
        {/* <div className="card1"> */}
            <Card text="Translator"
              style={{
                paddingTop:'2em',
                paddingLeft:'6em',
                paddingBottom:'2em',
                paddingRight:'6em'
             }} /> 
            {/* </div> */}
    </section>
   </main>
  )
}

export default Hero