import styles from './HeroStyles.module.css';
import heroImg from '../../assets/formal_circle.png';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg';
import githubIcon from '../../assets/github-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import likedInLight from '../../assets/linkedin-light.svg';
import likedInDark from '../../assets/linkedin-dark.svg';
import linkedInIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? likedInLight : likedInDark;


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
            </span>
            <p className={styles.description}>With a passion to develop AI models and data science hello everyone how are you.</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
