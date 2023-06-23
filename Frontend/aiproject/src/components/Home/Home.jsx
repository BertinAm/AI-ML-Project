import React from 'react'
import Card from '../shared/Card'
import illustration from '../Images/online-translator-pana-removebg-preview.png'
import illustration1 from '../Images/assetsimage-removebg-preview.png'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <main className='Hero' >
    <p className="hero1">WELCOME  TO </p>
    <h1 className="hero2">Visual-Lingual</h1>  
    <section className="card-section">
    <Link  to="FaceDetection" className='cards' > 
    '   <Card text="Face detection" 
            style={{
                paddingTop:'3em',
                paddingBottom:'3em'
             }}
             src={illustration1}    
             link={<Link  to="/translate"></Link>}
             />  
    </Link>
    <Link to="translate" className='cards'>
            <Card text="Translator"
              style={{
                paddingTop:'4.5em',
                paddingBottom:'3em'
             }}
             src={illustration}
             />
               </Link>
    </section>
   </main>
  )
}

export default Home