import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    {
      name: 'Personal - Portfolio',
      desc: 'Personal site built with React + Vite.The goal of this project was to showcase my technical skills, projects and background in an interactive and modern interface. One of the visually appealing features I implemented was the animated particle background using the react-tsparticles library. ',
      link: 'https://github.com/ShrutikaSoni/Portfolio',
      image: '/Portfolio.jpeg',
    },
    {
      name: 'Deep Analysis',
      desc: 'An AI-powered CSV analysis platform using React.js and Tailwind CSS.Implemented responsive UI components for file uploads, chat interface and session management.Integrated frontend with FastAPI backend via REST APIs to enable real-time data processing and analysis.',
      link: 'https://github.com/ShrutikaSoni/DeepAnalysis',
      image: '/DeepAnalysis.jpeg',
    },
    {
      name: 'Crime Management System',
      desc: 'The Crime Management System project is a web-based application designed to assist law enforcement agencies and legal authorities in managing and tracking criminal cases efficiently. It utilizes HTML, CSS, and JavaScript for the frontend, Python for the backend, and SQLite for the database.',
      link: 'https://github.com/ShrutikaSoni/CrimeManagementSystem',
      image: '/CrimeSystem.jpeg',
    }
    ,
    {
      name: 'hrfirst.ai',
      desc: 'A web application that helps HR professionals manage their candidates and streamline their hiring process. It will automatically extract and organize all important candidate information.Get insights on candidate pools and make data-driven hiring decisions.',
      link: ' https://github.com/ShrutikaSoni/hrfirst.ai',
      image: '/hrfirst.ai.jpeg',
    }

  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {/* Project image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className={styles.projectImage}
              />
            </a>

            {/* Project details */}
            <div className={styles.projectInfo}>
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
