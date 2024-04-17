import React, { useState } from 'react';
import Hamburger from './Hamburger'


function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
return (
<header>   
<nav className="navBar">
      <a href="/" className="navBar-logo">BartOver</a>
      <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ul className={isMenuOpen ? "navBar-nav open" : "navBar-nav"}>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
</header>
);

}


export default Header