import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='languageSwitcher'>
      <label for='filter' class='switch' aria-label='Toggle Filter'>
          <input type='checkbox' id='filter' />
          <span onClick={() => changeLanguage('en')}>EN</span>
          <span onClick={() => changeLanguage('ru')}>RU</span>
      </label>
    </div>
  );
};

export default LanguageSwitcher;