// components/Hero.jsx
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Hero.module.css';

function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'React Expert', 'Open Source Contributor'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <motion.section
      id="hero"
      className={styles.hero}
      initial={{ opacity: 1, y: -5 }}
      animate={{ opacity: 10, y: 100 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className={styles.glow}></div>
      <h1>Hi, I’m Shrutika Soni</h1>
      <h2>
        {inView ? text : ''}<span className={styles.cursor}>|</span>
      </h2>
      <a href="/projects" className={styles.cta}>
        Check out my work
      </a>
      <div className={styles.additional}>
        <ul>
          <li>Started development journey during college academics</li>
           <li>Expert in Frontend such as React, Figma,  ASP.NET & TypeScript </li>
          <li>Handled multiple live projects throughout internship periods</li>
          <li>Expert in Backend such as Springboot, Hibernate & Visual Basic </li>
          <li>Contributor to 12+ open source projects</li>
          <li>Passionate about clean code & best practices</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Hero;
