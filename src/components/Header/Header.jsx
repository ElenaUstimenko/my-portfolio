import { useState, useEffect } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import MenuItems from './MenuItems/MenuItems';
import menu from 'images/btn/burger_menu.png';
import close from 'images/btn/burger_close.png';
import './Header.css';

const Header = ({ refs }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    if (isMenuOpen) {
      closeMenu();
    }
    setTimeout(() => setIsPressed(false), 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1024 && isMenuOpen) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className='header'>
      <LanguageSwitcher />
      <nav className={`header__list ${isMenuOpen ? 'open' : ''}`}>
        <MenuItems refs={refs} isPressed={isPressed} handlePress={handlePress} isMobile={false} />
      </nav>
      <button className='burger' onClick={toggleMenu}>
        <img
          className='header__menu'
          src={isMenuOpen ? close : menu}
          alt={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        />
      </button>
      {isMenuOpen && (
        <div className='header__mobileMenu'>
            <MenuItems refs={refs} isPressed={isPressed} handlePress={handlePress} isMobile={true} />
          <div className='overlay' onClick={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;