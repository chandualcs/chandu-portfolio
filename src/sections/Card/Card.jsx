import React from "react";
import "./Card.css";
import githubLight from '../../assets/github-light.svg';
// import skill_icon from '../../assets/skill_dimond.png'
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import skill_icon_dark from '../../assets/skill_dimond_dark.png'
import skill_icon_light from '../../assets/skill_dimond_light.png'

const Card = ({ image, title, description, repoLink, skill }) => {
    const {theme, toggleTheme} = useTheme();

    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const skill_icon = theme === 'light' ? skill_icon_light : skill_icon_dark;
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="skill-section">
        <img
            src={skill_icon}
            // alt="GitHub"
            className="skill-icon"
        />
        {skill}
        </p>
        <a href={repoLink} className="card-link" target="_blank" rel="noopener noreferrer">
        <img
            src={githubIcon}
            alt="GitHub"
            className="github-icon"
        />
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Card;
