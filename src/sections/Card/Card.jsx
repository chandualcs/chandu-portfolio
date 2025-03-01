import React, { useState } from "react";
import "./Card.css";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import skill_icon_dark from '../../assets/skill_dimond_dark.png';
import skill_icon_light from '../../assets/skill_dimond_light.png';
import resultIcon from '../../assets/result.png'

const Card = ({ image, title, description, repoLink, skill, description21,description22,description23,description24,description25, shouldFlipp, resultLink1,resultLink2, video1,TeluguVideo,HindiVideo,BengaliVideo,KannadaVideo,hasVideo}) => {
    const { theme } = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const skill_icon = theme === 'light' ? skill_icon_light : skill_icon_dark;
    const [flipped, setFlipped] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Telugu");

    const handleFlip = () => {
      if (shouldFlipp) {
        setFlipped(!flipped);
      }
    };
    
    const handleMouseLeave = () => {
      setFlipped(false);
    };

    const handleShowVideos = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
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
              {hasVideo && (
                  <button className="show-videos-btn" onClick={(e) => { e.stopPropagation(); handleShowVideos(); }}>
                    Demo Result
                  </button>
                  )}
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
      
      {/* Video Modal */}
        {showModal && (
          <div className="video-modal-overlay">
            <div className="video-modal">
              <button className="close-modal" onClick={handleCloseModal}>×</button>

              <div className="video-container">
                {/* Always show the first video */}
                <video controls className="video-player">
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Display only the selected language video */}
                {selectedLanguage === "Telugu" && (
                  <video controls className="video-player">
                    <source src={TeluguVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedLanguage === "Hindi" && (
                  <video controls className="video-player">
                    <source src={HindiVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedLanguage === "Bengali" && (
                  <video controls className="video-player">
                    <source src={BengaliVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedLanguage === "Kannada" && (
                  <video controls className="video-player">
                    <source src={KannadaVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="language-buttons">
                  <button className={selectedLanguage === 'Telugu' ? 'activeTab' : ''} onClick={() => setSelectedLanguage("Telugu")}>Telugu</button>
                  <button className={selectedLanguage === 'Hindi' ? 'activeTab' : ''} onClick={() => setSelectedLanguage("Hindi")}>Hindi</button>
                  <button className={selectedLanguage === 'Bengali' ? 'activeTab' : ''} onClick={() => setSelectedLanguage("Bengali")}>Bengali</button>
                  <button className={selectedLanguage === 'Kannada' ? 'activeTab' : ''} onClick={() => setSelectedLanguage("Kannada")}>Kannada</button>
                </div>
            </div>
          </div>
        )}
      </>
    );
};

export default Card;
