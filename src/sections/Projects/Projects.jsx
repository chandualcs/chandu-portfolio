import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import stairDepth from '../../assets/clg_13.jpeg';
import humanEmotionRecognition from '../../assets/Emotion-Detection.png';
import LipSync from '../../assets/poster.jpg';
import BlinkIt_sales from '../../assets/blinkit_dashboard.png';
import Pizza_sales from '../../assets/Pizzas-sales.jpg';
import Original_video from '../../assets/Original_English.mp4';
import Telugu_video from '../../assets/Telugu_translated.mp4';
import Hindi_video from '../../assets/HindiVideo.mp4';
import Bengali_video from '../../assets/BengaliVideo.mp4';
import Kannada_video from '../../assets/KannadaVideo.mp4';
import HindiFake from '../../assets/HindiFake_1.mp4';
import TeluguFake from '../../assets/teluguFake_1.mp4';
import BengaliFake from '../../assets/bengaliFake_1.mp4';
import KannadaFake from '../../assets/kannadaFake_1.mp4';
import video2 from '../../assets/originalFake_1.mp4';
import video3 from '../../assets/originalFake_2.mp4';
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
              shouldFlipp={true}
              image={LipSync}
              title="Lip-Sync-video-Translator"
              description="Translation of videos across multiple Indian and foreign languages ensuring lip sync."
              repoLink="https://github.com/chandualcs/Lip-Sync-video-Translator"
              skill="GenAI, NLP, NMT, TTS, Vocoder"
              description21="=> Ensuring lip sync accroding to the translated audio while maintaining the original voice of the speaker."
              description22="=> L(A) can be any language."
              description23="=> L(B) can be Telugu, Hindi, Kannada, Bengali, Chattisgari or Marathi."
              
              description24="=> Multilingual speech to text translation, text to speech generation with vocoder and audio based lip synchronizer."
              resultLink1="https://github.com/chandualcs/Lip-Sync-video-Translator"
              description25="English video translated to Telugu"
              hasVideo={true}
              video1={Original_video}
              TeluguVideo={Telugu_video}
              HindiVideo={Hindi_video}
              BengaliVideo={Bengali_video}
              KannadaVideo={Kannada_video}
              KannadaFake={KannadaFake}
              HindiFake={HindiFake}
              Bengalifake={BengaliFake}
              TeluguFake={TeluguFake}
              video2={video2}
              video3={video3}
              
            />
            <Card
              shouldFlipp={true}
              image={stairDepth}
              title="StairDepth"
              description="Cost-effective staircase detection system improved precision, recall, and IoU significantly."
              repoLink="https://github.com/chandualcs/StairDepth-A-Novel-Staircase-detection"
              skill="DL, CNN, CV, Depth analysis"
              // Back side
              description21="=> Staicase detection to guide robotic lomotions and visually impaired."
              description22="=> RGB Image (512x512x3) is given as input."
              description23="=> Classification of stair edges as concave or convex edges and surface as treader or riser."
              description24="=> Depth Module to generate depth of RGB images and sequential SE-ResNext blocks(Squeeze and excitation Grouped convolutions)"
              description25="Segmantation Result."
              resultLink1="https://github.com/chandualcs/StairDepth-A-Novel-Staircase-detection/blob/main/Results.png"
            />
            <Card
              shouldFlipp={false}
              image={humanEmotionRecognition}
              title="Human Emotion Recognition"
              description="CNN-based emotion recognition model achieved 73.05% accuracy using AffectNet dataset."
              repoLink="https://github.com/chandualcs/HumanEmotionRecognition"
              skill="ResNet50, CNN, kaggle"
              //back side
              
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
