


import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import profileImage from '../../assets/semi-formal_circle.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.png'
import msgGIF from '../../assets/mail.png';
import { useTheme } from '../../common/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <nav>
      <ul>
        <Link to="hero" smooth={true} duration={500}>
          <img src={profileImage} alt="profileImage" />
        </Link>
        <li>
          <Link to="hero" smooth={true} duration={500} spy={true} activeClass="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={600} spy={true} activeClass="active-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={700} spy={true} activeClass="active-link">
            About Me
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800} spy={true} activeClass="active-link">
            Contact
          </Link>
        </li>
      </ul>
      <div className='images'>
        <a href="https://github.com/chandualcs" target='_blank' rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/chandra-shekar-avire-544577281/" target='_blank' rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn Icon" />
        </a>
        <a href="mailto:chandualcs@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={msgGIF} alt="Email Icon"/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
