import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import stairDepth from '../../assets/clg_13.jpeg';
import humanEmotionRecognition from '../../assets/Emotion-Detection.png';
import LipSync from '../../assets/poster.jpg';
import BlinkIt_sales from '../../assets/blinkit_dashboard.png';
import Pizza_sales from '../../assets/Pizzas-sales.jpg'
import ProjectCard from '../../common/ProjectCard';
import Card from '../Card/Card';
import { useTheme } from '../../common/ThemeContext';
import React, { useState } from 'react';


const Projects = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('MachineLearning');

  const renderContent = () => {

    switch (activeTab) {
      case 'MachineLearning':
        return(
          <div className={styles.projectContainer}>
            <Card
              image={LipSync}
              title="Lip-Sync-video-Translator"
              description="Translation of videos across multiple Indian and foreign languages ensuring lip sync."
              repoLink="https://github.com/chandualcs/Lip-Sync-video-Translator"
              skill="GenAI, NLP, NMT, TTS, Vocoder"
            />
            <Card
              image={stairDepth}
              title="StairDepth"
              description="Cost-effective staircase detection system improved precision, recall, and IoU significantly."
              repoLink="https://github.com/chandualcs/StairDepth-A-Novel-Staircase-detection"
              skill="DL, CNN, CV, Depth analysis"
            />
            <Card
              image={humanEmotionRecognition}
              title="Human Emotion Recognition"
              description="CNN-based emotion recognition model achieved 73.05% accuracy using AffectNet dataset."
              repoLink="https://github.com/chandualcs/HumanEmotionRecognition"
              skill="ResNet50, CNN, kaggle"
            />
          </div>
        );
        
      case 'DataAnalysis':
        return(
          <div className={styles.projectContainer}>
            <Card
              image={BlinkIt_sales}
              title="BlinkIt sales Visualization"
              description=" Visualization and Analyzed Blinkit's sales data using Power BI to uncover key trends."
              repoLink="https://github.com/chandualcs/Blinkit-sales-data-analysis-using-Power-BI"
              skill="Data visualization, Tableau"
            />
            <Card
              image={Pizza_sales}
              title="Pizza sales Analysis"
              description="Analyzed PizzaHut database for sales trends, customer preferences, and revenue."
              repoLink="https://github.com/chandualcs/Pizza-sales"
              skill="MySQL, Data Analysis"
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
