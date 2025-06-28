import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='languageSwitcher'>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
};

export default LanguageSwitcher;