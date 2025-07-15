import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import CardProject from '../CardProject/CardProject';
import './Projects.css';

const Projects = ({ projectsRef }, ref) => {
  const { t } = useTranslation();

  const textAnimation = {
    hidden: {
      x: 100,
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: custom / 4 }
    })
  };

  const projectsTranslations = t('projectsList', { returnObjects: true });
  
  const projectsList = Object.keys(projectsData).map(key => ({
    ...projectsData[key],
    title: projectsTranslations[key]?.title || '',
    description: projectsTranslations[key]?.description || ''
  }));

  return (
    <motion.div
      ref={projectsRef}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
      className='projects'
    >
      <h3 className='projects__title'>{t('projects')}</h3>
      <ul className='projects__list'>
        {projectsList.map(project => (
          <CardProject
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            github={project.github}
            browser={project.browser}
            image={project.image}
            variants={textAnimation}
          />
        ))}
      </ul>
      <div className='projects__info'>
        <motion.p
          variants={textAnimation}
          custom={0.3}
          className='projects__data'
        >
          {t('andOther')}
          <span className='projects__dataSpan'> GitHub... </span> <br />{' '}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default forwardRef(Projects);
