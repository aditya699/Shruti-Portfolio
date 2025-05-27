import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

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
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/contact">Contact</a>
      </div>
      <button onClick={toggleTheme} className={styles.toggleButton}>
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;
