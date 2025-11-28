import React from 'react';

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
    <section style={{
      padding: '7rem 5%',
      background: '#0f172a',
      color: '#fff',
    }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
        marginBottom: '1rem',
        fontFamily: 'monospace',
      }}>
        Featured Projects
      </h2>
      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 4rem',
        opacity: 0.8,
        fontSize: '1.1rem',
      }}>
        Here are some of the projects I've worked on that demonstrate my expertise in backend development and system architecture.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <div style={{
              width: '100%',
              height: '200px',
              background: '#1a1f2e',
              position: 'relative',
            }}>
              {/* Placeholder for project image */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3rem',
                opacity: 0.8,
              }}>
                {project.icon || project.title[0]}
              </div>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.5rem',
              }}>
                {project.title}
              </h3>
              <p style={{
                margin: '0 0 1rem 0',
                opacity: 0.8,
                lineHeight: 1.6,
                flexGrow: 1,
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                    }}
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