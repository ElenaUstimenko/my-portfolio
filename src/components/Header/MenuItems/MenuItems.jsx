import { useTranslation } from 'react-i18next';
import './MenuItems.css';

const MenuItems = ({ refs, isPressed, handlePress, isMobile }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <button
        onClick={() => {
          handlePress();
          refs.stackRef.current.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
        }}
        className={`header__link ${isPressed ? 'pressed' : ''} ${isMobile ? 'mobile' : ''}`}
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
        className={`header__link ${isPressed ? 'pressed' : ''} ${isMobile ? 'mobile' : ''}`}
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
        className={`header__link ${isPressed ? 'pressed' : ''} ${isMobile ? 'mobile' : ''}`}
      >
        {t('contact')}
      </button>
    </>
  );
};

export default MenuItems;