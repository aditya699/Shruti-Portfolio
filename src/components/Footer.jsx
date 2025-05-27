import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Shrutika Soni. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
