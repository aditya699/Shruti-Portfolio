import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from '../styles/About.module.css';

const About = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.wrapper}>
      <section id="about" className={styles.content}>
        <h2>About Me</h2>
        <p>
          I’m a passionate and results-driven Full Stack Developer with expertise in building scalable, high-performance web applications using React.js, Java (Spring Boot), and MySQL. With a solid foundation in both frontend and backend technologies, I specialize in creating end-to-end solutions that are not only efficient but also user-centric.

          I’ve successfully delivered real-world projects during internships at CleverPe and Strides Software Solutions, where I built interactive dashboards, managed secure databases, and implemented RESTful APIs. From crafting responsive UIs to architecting backend systems, I thrive in transforming complex problems into elegant, functional solutions.

          I take pride in writing clean, maintainable code and staying updated with industry best practices. I’m constantly exploring new tools and frameworks to enhance my skillset and deliver value-driven software. Whether working independently or as part of a collaborative team, I bring creativity, precision, and a strong work ethic to every project.

          Let’s build something amazing together.
        </p>
      </section>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 }
            }
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 }, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: "bounce" }
            }
          },
          detectRetina: true
        }}
      />



    </div>
  );
};

export default About;
