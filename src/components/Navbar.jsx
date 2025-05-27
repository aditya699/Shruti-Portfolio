import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <button onClick={toggleTheme} className={styles.toggleButton}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
