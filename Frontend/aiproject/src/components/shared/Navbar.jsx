import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="navbar">
      <ul className="navlinks">
        <li className="navlink">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="navlink">
          <Link className="link" to="face-detection">
            Face Detection
          </Link>
        </li>
        <li className="navlink">
          <Link to="translate" className="link">
            Translation
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Navbar