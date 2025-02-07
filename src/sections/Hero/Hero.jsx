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
                <a href="https://wa.me/7207814656" target="_blank" rel="noopener noreferrer">
                    <img className={styles.icon} src={whatsappIcon} alt="Email Icon"/>
                </a>
                <a href="tel:+917207814656">
                    <img className={styles.icon} src={call} alt="Email Icon"/>
                </a>
            </span>
            <p className={styles.description}>
                Welcome!, I am Aspiring Data Scientist passionate about leveraging AI, machine learning, and data analytics to develop impactful solutions and uncover actionable insights.
            </p>
            <div className={styles.buttons}>
                <a href={CV} >
                    <button className="resume">Resume</button>                
                </a>
                <Link to="contact" smooth={true} duration={800}><button className="contact">Contact</button></Link>
            </div>
            
        </div>
    </section>
  )
}

export default Hero
