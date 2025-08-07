import React from 'react'
import Link from "react-router";
import { navLinks } from '../../constants/index.js';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="#home" className="flex items-center gap-2">
          <img src="./images/logo.png" alt="logo" />
            <p>Velvet Pour</p>
        </Link>
        <ul>
          {navLinks.map((link)=> (
            <li key={link.id}>
              <Link to={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar