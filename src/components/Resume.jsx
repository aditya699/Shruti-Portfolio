import styles from './Resume.module.css';

function Resume() {
  return (
    <section className={styles.resume}>
      <h2>Resume</h2>
      <h3>Experience</h3>
      <ul>
        <li>Full Stack Developer at ABC Corp (2022–Present)</li>
        <li>Frontend Developer at XYZ Ltd (2020–2022)</li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li>B.Tech in Computer Science, University Name, 2020</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>React, Node.js, MongoDB, Express, JavaScript, CSS</li>
      </ul>
    </section>
  );
}

export default Resume;
