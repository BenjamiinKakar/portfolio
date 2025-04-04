import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise Resource Planning System',
      description: 'A comprehensive ERP solution built with .NET Core and React, handling inventory, HR, and financial management.',
      tech: ['C#', '.NET Core', 'React', 'PostgreSQL', 'Azure'],
      image: '/projects/erp.jpg',
      link: '#'
    },
    {
      title: 'AI-Powered Customer Support',
      description: 'LLM-based customer support system that reduced response time by 60% and improved customer satisfaction.',
      tech: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker'],
      image: '/projects/ai-support.jpg',
      link: '#'
    },
    {
      title: 'Cloud Migration Project',
      description: 'Successfully migrated legacy mainframe systems to cloud-native architecture, improving performance by 200%.',
      tech: ['Java', 'AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/projects/cloud.jpg',
      link: '#'
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
        Here are some of the projects I've worked on that demonstrate my expertise in full-stack development and system architecture.
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
                fontSize: '2rem',
                opacity: 0.5,
              }}>
                {project.title[0]}
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
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
              <a
                href={project.link}
                style={{
                  color: '#64ffda',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                }}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 