import React, { useState } from "react";
import "./Card.css";
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import skill_icon_dark from '../../assets/skill_dimond_dark.png';
import skill_icon_light from '../../assets/skill_dimond_light.png';
import resultIcon from '../../assets/result.png'

const Card = ({ image, title, description, repoLink, skill, description21,description22,description23,description24,description25, shouldFlipp, resultLink1,resultLink2, video1,video2,video3,TeluguVideo,TeluguFake,HindiVideo,HindiFake,BengaliVideo,Bengalifake,KannadaVideo,KannadaFake,hasVideo}) => {
    const { theme } = useTheme();
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const skill_icon = theme === 'light' ? skill_icon_light : skill_icon_dark;
    const [flipped, setFlipped] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("Telugu");
    const [selectedLanguage1, setSelectedLanguage1] = useState("Telugu1");
    const [selectedVideo, setSelectedVideo] = useState("Real1");

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
            <p className="video-heading">Results with present available techniques.</p>
              <button className="close-modal" onClick={handleCloseModal}>×</button>
              {/* first video-section */}
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

                <p className="video-heading">Proof for inconsistency in generated lip landmarks.</p>
                <div className="language-buttons">
                  <button className={selectedVideo === 'Real1' ? 'activeTab' : ''} onClick={() => setSelectedVideo("Real1")}>Real1</button>
                  <button className={selectedVideo === 'Real2' ? 'activeTab' : ''} onClick={() => setSelectedVideo("Real2")}>Real2</button>
                </div>
                {/* second video-section */}
                <div className="video-container">
                {selectedVideo === 'Real1' &&(
                  <video controls className="video-player">
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                )}
                {selectedVideo === 'Real2' &&(
                  <video controls className="video-player">
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                )}
                

                {selectedLanguage1 === "Telugu1" && (
                  <video controls className="video-player">
                    <source src={TeluguFake} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedLanguage1 === "Hindi1" && (
                  <video controls className="video-player">
                    <source src={HindiFake} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedLanguage1 === "Bengali1" && (
                  <video controls className="video-player">
                    <source src={Bengalifake} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {selectedLanguage1 === "Kannada1" && (
                  <video controls className="video-player">
                    <source src={KannadaFake} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="language-buttons">
                <button className={selectedLanguage1 === 'Telugu1' ? 'activeTab' : ''} onClick={() => setSelectedLanguage1("Telugu1")}>Telugu</button>
                <button className={selectedLanguage1 === 'Hindi1' ? 'activeTab' : ''} onClick={() => setSelectedLanguage1("Hindi1")}>Hindi</button>
                <button className={selectedLanguage1 === 'Bengali1' ? 'activeTab' : ''} onClick={() => setSelectedLanguage1("Bengali1")}>Bengali</button>
                <button className={selectedLanguage1 === 'Kannada1' ? 'activeTab' : ''} onClick={() => setSelectedLanguage1("Kannada1")}>Kannada</button>
              </div>

            </div>
          </div>
        )}
      </>
    );
};

export default Card;
