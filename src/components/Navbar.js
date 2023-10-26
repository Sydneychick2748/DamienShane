import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Import Link
import "./NavBar.css";

function Navbar() {
  return (
   
        <>
         <header>
          <h1 className="logo">DAMIEN SHANE</h1>
        
          <nav>
            <ul>
              <li>
                <a href="#bio">BIO</a>
              </li>
              <li>
                <a href="#music">MUSIC</a>
              </li>
              <li>
                <a href="#videos">VIDEOS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" title="Show navbar" className="nav-toggle-label">
            <span></span>
          </label>
         </header>
        </>
      );
    }
    

export default Navbar;


