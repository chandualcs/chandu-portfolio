import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import profileImage from '../../assets/semi-formal_circle.png'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import likedInLight from '../../assets/linkedin-light.svg';
import likedInDark from '../../assets/linkedin-dark.svg';
import msgGIF from '../../assets/message.gif'
import { useTheme } from '../../common/ThemeContext';

const Navbar = () => {

  const {theme, toggleTheme} = useTheme();

      const githubIcon = theme === 'light' ? githubLight : githubDark;
      const linkedInIcon = theme === 'light' ? likedInLight : likedInDark;

  return (
    <nav>
      <ul>
        <Link to="hero" smooth={true} duration={500}>
          <img src={profileImage} alt="profileImage"/>
        </Link>
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={600}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={700}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='images'>
        
        <a href="https://github.com/chandualcs" target='_blank'>
          <img src={githubIcon} alt="LinkedIn Icon" />
        </a>
        <a href="https://www.linkedin.com/in/chandra-shekar-avire-544577281/" target='_blank'>
          <img src={linkedInIcon} alt="LinkedIn Icon" />
        </a>
        <Link to="contact" smooth={true} duration={800}>
            <img src={msgGIF} alt="msgGIF" />
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;


