import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
   <main className='navbar'>
<ul className="navlinks">
<Link  to="/" ><li className="navlink">Home</li></Link> 
<Link  to="FaceDetection" > <li className="navlink">Face Detection</li></Link>
     <li className="navlink">
          <Link to="translate" className="link">
            Translation
          </Link>
        </li> 
</ul>
   </main>
  )
}


export default Navbar