import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = ({ refs }) => {
   const { t } = useTranslation();
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 100);
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <button
          onClick={() => {
            handlePress();
            refs.stackRef.current.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }}
          className={`header__link ${isPressed ? 'pressed' : ''}`}
        >
          {t('stack')}
        </button>
        <button
          onClick={() => {
            handlePress();
            refs.projectsRef.current.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }}
          className={`header__link ${isPressed ? 'pressed' : ''}`}
        >
       {t('projects')}
        </button>
        <button
          onClick={() => {
            handlePress();
            refs.contactRef.current.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }}
          className={`header__link ${isPressed ? 'pressed' : ''}`}
        >
        {t('contact')}
        </button>
      </div>
    </header>
  );
};

export default Header;
