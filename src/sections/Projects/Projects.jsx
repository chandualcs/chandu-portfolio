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
import Card from '../Card/Card';
import { useTheme } from '../../common/ThemeContext';
import React, { useState } from 'react';

// function Projects() {
//   return (
//     <section id="projects" className={styles.container}>
//       <h1 className="sectionTitle">Projects</h1>
//       {/* <h1 className={styles.sectionTitle}>Projects</h1> */}
//       <div className={styles.projectsContainer}>
//       <ProjectCard
//           src={stairDepth}
//           link="https://github.com/chandualcs/StairDepth-A-Novel-Staircase-detection"
//           h3="StairDepth"
//           p="Staircase Classification"
//         />
//       <ProjectCard
//           src={humanEmotionRecognition}
//           link="https://github.com/chandualcs/HumanEmotionRecognition"
//           h3="Emotion Recognition"
//           p="Human Emotion Recognition"
//         />
//       <ProjectCard
//           src={BlinkIt_sales}
//           link="https://github.com/chandualcs/Blinkit-sales-data-analysis-using-Power-BI"
//           h3="BlinkIt sales visualization"
//           p="PowerBI Dashboard"
//         />
//       <ProjectCard
//           src={Pizza_sales}
//           link="https://github.com/chandualcs/Pizza-sales"
//           h3="Pizza sales analysis"
//           p="MySQL"
//         />
//       </div>
//     </section>
//   );
// }

// export default Projects;


const Projects = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('MachineLearning');

  const renderContent = () => {

    switch (activeTab) {
      case 'MachineLearning':
        return(
          <div className={styles.projectContainer}>
            <Card
              image={stairDepth}
              title="StairDepth"
              description="Cost-effective staircase detection system improved precision, recall, and IoU significantly."
              repoLink="https://github.com/chandualcs/StairDepth-A-Novel-Staircase-detection"
            />
            <Card
              image={humanEmotionRecognition}
              title="Human Emotion Recognition"
              description="CNN-based emotion recognition model achieved 73.05% accuracy using AffectNet dataset."
              repoLink="https://github.com/chandualcs/HumanEmotionRecognition"
            />
          </div>
        );
        
      case 'DataAnalysis':
        return(
          <div className={styles.projectContainer}>
            <Card
              image={BlinkIt_sales}
              title="BlinkIt sales Visualization"
              description="This is a sample React project to demonstrate card components."
              repoLink="https://github.com/chandualcs/Blinkit-sales-data-analysis-using-Power-BI"
            />
            <Card
              image={Pizza_sales}
              title="Pizza sales Analysis"
              description="Analyzed PizzaHut database for sales trends, customer preferences, and revenue."
              repoLink="https://github.com/chandualcs/Pizza-sales"
            />
          </div>
        );

    }

  };

  return (
    <section id="Projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.tabContainer}>
        <button
          className={activeTab === 'MachineLearning' ? styles.activeTab : ''}
          onClick={() => setActiveTab('MachineLearning')}
        >
        Machine Learning
        </button>

        <button
          className={activeTab === 'DataAnalysis' ? styles.activeTab : ''}
          onClick={() => setActiveTab('DataAnalysis')}
        >
        Data Analysis
        </button>
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </section>
  );
};

export default Projects;
