import styles from './HeroStyles.module.css';
import { Link } from 'react-scroll';
import heroImg from '../../assets/semi-formal_circle.png';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInIcon from '../../assets/linkedin-dark.png'
import CV from '../../assets/cv.pdf'
import msgGIF from '../../assets/mail.png';
import call from '../../assets/call.png';
import HighlightEffect from '../HighlightEffect/HighlightEffect';
import whatsappIcon from '../../assets/whatsapp.png';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;


  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} alt="Profile picture of chandu" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            
            <h1>
                Laxmi Chandra Shekar 
                <br />
                Avire
            </h1>
            <h2>
                Aspiring Data Scientist
            </h2>
            <span>
                <a href="https://github.com/chandualcs" target='_blank'>
                    <img className={styles.icon} src={githubIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://www.linkedin.com/in/chandra-shekar-avire-544577281/" target='_blank'>
                    <img className={styles.icon} src={linkedInIcon} alt="LinkedIn Icon" />
                </a>
                <a href="mailto:chandualcs@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src={msgGIF} alt="Email Icon"/>
                </a>
            </span>
            <p className={styles.description}>
            Building AI that sees and speaks! 🚀 From stair detection for accessibility to lip-sync translation—check out my Projects📁 & Publications📜!.
            
            </p>
            
            <div className={styles.buttons}>
                <a href={CV} target='_blank'>
                    <button className="resume">Resume</button>                
                </a>
                <Link to="Projects" smooth={true} duration={400}><button className="Projects">Projects</button></Link>
                <Link to="skills" smooth={true} duration={800}><button className="Publications">Publications</button></Link>
            </div>
            <div className={styles.letsConnect}>
            <Link to="contact" smooth={true} duration={400}><button className={styles.connect}>Let's Connect!🤝</button></Link>
            </div>
            
            
        </div>
    </section>
  )
}

export default Hero
