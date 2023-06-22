import React from 'react'
import Card from '../shared/Card'

const Hero = () => {
  return (
   <main className='Hero' >
    <p className="hero1">WELCOME  TO </p>
    <h1 className="hero2">Visual-Lingual</h1>
    <section className="card-section">
        <div className="card1"><Card/> </div>
        <div className="card1"><Card/> </div>
    </section>
   </main>
  )
}

export default Hero