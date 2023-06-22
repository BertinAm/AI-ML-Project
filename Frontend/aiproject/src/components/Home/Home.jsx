import React from 'react'
import Card from '../shared/Card'
import illustration from '../Images/online-translator-pana-removebg-preview.png'
import illustration1 from '../Images/assetsimage-removebg-preview.png'

const Home = () => {
  return (
    <main className='Hero' >
    <p className="hero1">WELCOME  TO </p>
    <h1 className="hero2">Visual-Lingual</h1>
    <section className="card-section">
            <Card text="Face detection" 
            style={{
                paddingTop:'3em',
                paddingBottom:'3em'
             }}
             src={illustration1}    
             /> 
            <Card text="Translator"
              style={{
                paddingTop:'3em',
                paddingBottom:'3em'
             }}
             src={illustration}
             />
    </section>
   </main>
  )
}

export default Home