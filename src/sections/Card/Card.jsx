import React, { useState } from "react";
import "./Card.css";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import skill_icon_dark from '../../assets/skill_dimond_dark.png';
import skill_icon_light from '../../assets/skill_dimond_light.png';
import resultIcon from '../../assets/result.png'

const Card = ({ image, title, description, repoLink, skill, description21,description22,description23,description24,description25, shouldFlipp, resultLink1,resultLink2 }) => {
    const { theme } = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const skill_icon = theme === 'light' ? skill_icon_light : skill_icon_dark;
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
      if (shouldFlipp) {
        setFlipped(!flipped);
      }
    };
    const handleMouseLeave = () => {
      setFlipped(false);
    };
  
    return (
      <div className="card-container" onClick={handleFlip} onMouseLeave={handleMouseLeave}>
        <div className={`card ${flipped ? 'flipped' : ''}`}>
          <div className="card-front">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <p className="card-description">{description}</p>
              <p className="skill-section">
                <img src={skill_icon} className="skill-icon" alt="Skill" />
                {skill}
              </p>
              <a href={repoLink} className="card-link" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="github-icon" />
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
            <h2 className="card-title">Summary and Results</h2>
              <p className="card-description-back">{description21}</p>
              <p className="card-description-back">{description22}</p>
              <p className="card-description-back">{description23}</p>
              <p className="card-description-back">{description24}</p>
              <div className='card-resultLinks'>
                <p className="card-description-back">Result: </p>
                <a href={resultLink1} className="card-link" target="_blank" rel="noopener noreferrer">
                <p className="card-link-back">{description25}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;
