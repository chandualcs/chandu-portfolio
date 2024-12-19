import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import stairDepth from '../../assets/clg_13.jpeg';
import humanEmotionRecognition from '../../assets/Emotion-Detection.png';
import BlinkIt_sales from '../../assets/blinkit_dashboard.png';
import Pizza_sales from '../../assets/Pizzas-sales.jpg'
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      {/* <h1 className={styles.sectionTitle}>Projects</h1> */}
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={stairDepth}
          link="https://github.com/chandualcs/StairDepth-A-Novel-Staircase-detection"
          h3="StairDepth"
          p="Staircase Classification"
        />
      <ProjectCard
          src={humanEmotionRecognition}
          link="https://github.com/chandualcs/HumanEmotionRecognition"
          h3="Emotion Recognition"
          p="Human Emotion Recognition"
        />
      <ProjectCard
          src={BlinkIt_sales}
          link="https://github.com/chandualcs/Blinkit-sales-data-analysis-using-Power-BI"
          h3="BlinkIt sales visualization"
          p="PowerBI Dashboard"
        />
      <ProjectCard
          src={Pizza_sales}
          link="https://github.com/chandualcs/Pizza-sales"
          h3="Pizza sales analysis"
          p="MySQL"
        />
      </div>
    </section>
  );
}

export default Projects;
