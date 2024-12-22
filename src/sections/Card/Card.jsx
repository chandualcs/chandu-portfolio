import React from "react";
import "./Card.css";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';

const Card = ({ image, title, description, repoLink }) => {
    const {theme, toggleTheme} = useTheme();

    const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
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
