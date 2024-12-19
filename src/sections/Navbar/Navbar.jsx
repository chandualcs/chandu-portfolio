import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="sectionTitle" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
