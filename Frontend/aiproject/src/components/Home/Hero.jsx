import React from 'react'
import Card from '../shared/Card'
import illustration from '../Images/online-translator-pana.jpg'
import illustration1 from '../Images/assetsimage.jpeg'

const Hero = () => {
  return (
   <main className='Hero' >
    <p className="hero1">WELCOME  TO </p>
    <h1 className="hero2">Visual-Lingual</h1>
    <section className="card-section">
            <Card text="Face detection" 
            style={{
                paddingTop:'1.5em',
                paddingLeft:'5em',
                paddingBottom:'1.5em',
                paddingRight:'5em'
             }}
             src={illustration1}    
             /> 
            <Card text="Translator"
              style={{
                paddingTop:'1.5em',
                paddingLeft:'6.5em',
                paddingBottom:'1.5em',
                paddingRight:'6.5em'
             }}
             src={illustration}
             />
    </section>
   </main>
  )
}

export default Hero