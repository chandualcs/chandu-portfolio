import React, { useState } from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('publications'); // Default to 'skills'
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  // Tab Content
  const renderContent = () => {
    switch (activeTab) {
      case 'publications':
        return (
          <div className={styles.publicationContainer}>
            <h2>Recent Publication</h2>
            <div className={styles.publicationCard}>
              <h3 className={styles.publicationTitle}>
                StairDepth: A Novel Staircase Detection through Synthetic Depth Maps for Guiding Robotic Locomotions and Visually Impaired
              </h3>
              <p className={styles.publicationAuthors}>
                <strong>Authors:</strong> Laxmi Chandra Shekar Avire, Bhuvana Chandrika M, Hemanth Naidu V, Dr. Naresh Babu Muppalaneni
              </p>
              <p className={styles.publicationJournal}>
                <strong>Journal:</strong> International Journal of Information Technology, Singapore
              </p>
              <p className={styles.publicationStatus}>
                <strong>Status:</strong> Major reviews received, In Proceedings
              </p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className={styles.container}>
            <div className={styles.skillList}>
              <SkillList src={checkMarkIcon} skill="Machine Learning" />
              <SkillList src={checkMarkIcon} skill="Deep Learning" />
              <SkillList src={checkMarkIcon} skill="Computer Vision" />
              <SkillList src={checkMarkIcon} skill="GenAI" />
              <SkillList src={checkMarkIcon} skill="LLMs" />
            </div>
            <hr />
            <div className={styles.skillList}>
              <SkillList src={checkMarkIcon} skill="Python" />
              <SkillList src={checkMarkIcon} skill="MySQL" />
              <SkillList src={checkMarkIcon} skill="C" />
              <SkillList src={checkMarkIcon} skill="C++" />
              <SkillList src={checkMarkIcon} skill="HTML" />
              <SkillList src={checkMarkIcon} skill="CSS" />
              <SkillList src={checkMarkIcon} skill="JavaScript" />
              <SkillList src={checkMarkIcon} skill="GIT" />
            </div>
            <hr />
            <div className={styles.skillList}>
              <SkillList src={checkMarkIcon} skill="Docker" />
              <SkillList src={checkMarkIcon} skill="Hadoop" />
              <SkillList src={checkMarkIcon} skill="Spark" />
              <SkillList src={checkMarkIcon} skill="ReactJs" />
            </div>
            <hr />
            <div className={styles.skillList}>
              <SkillList src={checkMarkIcon} skill="Matplotlip" />
              <SkillList src={checkMarkIcon} skill="PowerBI" />
              <SkillList src={checkMarkIcon} skill="Excel" />
            </div>
          </div>
        );
      case 'education':
        return (
          <div className={styles.content}>
          <div className={styles.educationContainer}>
            <div className={styles.leftBox}>
              <p className={styles.collegeName}>Indian Institute of Information Technology Design and Manufacturing, Kurnool</p>
              <p className={styles.degree}>B.Tech in Artificial Intelligence and Data Science</p>
            </div>
            <div className={styles.rightBox}>
              <p className={styles.timeline}>2021-Ongoing</p>
              <p className={styles.cgpa}>CGPA : 7.5/10</p>
            </div>
          </div>
          <div className={styles.educationContainer}>
            <div className={styles.leftBox}>
              <p className={styles.collegeName}>FIITJEE Junior College, Hyderabad</p>
              <p className={styles.degree}>Intermediate</p>
            </div>
            <div className={styles.rightBox}>
              <p className={styles.timeline}>2019 - 2021</p>
              <p className={styles.cgpa}>Percentage: 93%</p>
            </div>
          </div>
          <div className={styles.educationContainer}>
            <div className={styles.leftBox}>
              <p className={styles.collegeName}>Sri Sai Public School, Hyderabad</p>
              <p className={styles.degree}>Class X ICSE</p>
            </div>
            <div className={styles.rightBox}>
              <p className={styles.timeline}>2018 - 2019</p>
              <p className={styles.cgpa}>Percentage: 95%</p>
            </div>
          </div>
        </div>
        );
      case 'experience':
        return (
          // <div className={styles.content}>
          //   <div className={styles.educationContainer}>
          //     <div className={styles.leftBox}>
          //       <p className={styles.collegeName}>Project Intern at Defence Electronics Research Laboratory, Hyderabad</p>
          //       <p className={styles.degree}>Project Title: Development of AI Systems - Design and Testing Perspective</p>
          //       <p className={styles.degree}>Collaborating on the design and implementation of AI systems for Medical applications.</p>
          //       <p className={styles.degree}>Conducting rigorous testing and evaluation to ensure system reliability and efficiency.</p>
          //     </div>
          //     <div className={styles.rightBox}>
          //       <p className={styles.timeline}>12/06/24 – 31/08/24</p>
          //     </div>
          //   </div>
          // </div>

          <div className={styles.publicationContainer}>
            <h2>Project Intern at Defence Electronics and Research Laboratory, Hyderabad</h2>
            <div className={styles.publicationCard}>
              <h3 className={styles.publicationTitle}>
              Project Title: Development of AI Systems - Design and Testing Perspective
              </h3>
              <p className={styles.publicationAuthors}>
              Collaborating on the design and implementation of AI systems for Medical applications.
              </p>
              <p className={styles.publicationAuthors}>
              Conducting rigorous testing and evaluation to ensure system reliability and efficiency.
              </p>
              <p className={styles.publicationStatus}>
                <strong>Duration:</strong> 12/06/2024 -- 31/08/2024
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.aboutMe}>About</h1>
      <div className={styles.tabContainer}>
        <button
          className={activeTab === 'publications' ? styles.activeTab : ''}
          onClick={() => setActiveTab('publications')}
        >
          Publications
        </button>
        <button
          className={activeTab === 'skills' ? styles.activeTab : ''}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={activeTab === 'education' ? styles.activeTab : ''}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={activeTab === 'experience' ? styles.activeTab : ''}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </section>
  );
}

export default Skills;
