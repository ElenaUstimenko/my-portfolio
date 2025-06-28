import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const [frontend, setFrontend] = useState(false);

  useEffect(() => {
    const i = document.querySelector('.about__name');
    setTimeout(() => {
      i.style.borderRight = 0;
      setFrontend(true);
    }, 2500);
  }, []);

  return (
    <section className='about'>
       <LanguageSwitcher />
      <h1 className='about__name'>{t('name')}</h1>
      {frontend && <h2 className='about__profession'>{t('profession')}</h2>}
    </section>
  );
};

export default About;