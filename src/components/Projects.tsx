import React from 'react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Critical System Integrations',
      description: 'Engineered and implemented critical system integrations with MitID and e-Boks, significantly enhancing security and efficiency for customer communications while ensuring regulatory compliance.',
      tech: ['C#', '.NET Core', 'RESTful APIs', 'Azure', 'Security'],
      image: '',
      link: '#',
      icon: '🔗'
    },
    {
      title: 'B2B Coupon & Loyalty System',
      description: 'Designed and developed a scalable coupon and loyalty system for a B2B program, resulting in improved customer engagement and stronger partner relationships.',
      tech: ['C#', '.NET Core', 'React', 'MSSQL', 'Web Development'],
      image: '',
      link: '#',
      icon: '🎟️'
    },
    {
      title: 'Legal Evidence Protection System',
      description: 'Developed a scalable data cloning solution to safeguard legal evidence in customer inquiry cases, strengthening the company\'s position in potential disputes.',
      tech: ['C#', '.NET Core', 'Data Structures', 'Algorithms', 'MSSQL'],
      image: '',
      link: '#',
      icon: '🛡️'
    }
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>
        Featured Projects
      </h2>
      <p className={styles.subtitle}>
        Here are some of the projects I've worked on that demonstrate my expertise in backend development and system architecture.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
          >
            <div className={styles.projectImagePlaceholder}>
              <div className={styles.projectIcon}>
                {project.icon || project.title[0]}
              </div>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>
                {project.title}
              </h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <div className={styles.projectTech}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={styles.techTag}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
 