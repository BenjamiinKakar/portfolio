import React from 'react';
import csharpLogo from '../assets/tech-logos/csharp.svg';
import dotnetLogo from '../assets/tech-logos/dotnetcore.png';
import blazorLogo from '../assets/tech-logos/blazor.svg';
import typescriptLogo from '../assets/tech-logos/typescript.svg';
import reactLogo from '../assets/tech-logos/react.svg';
import cicdLogo from '../assets/tech-logos/cicd.svg';
import azureLogo from '../assets/tech-logos/azure.svg';
import efLogo from '../assets/tech-logos/entity-framework.svg';
import postgresLogo from '../assets/tech-logos/postgresql.svg';
import firebaseLogo from '../assets/tech-logos/firebase.svg';
import tailwindLogo from '../assets/tech-logos/tailwind.svg';
import githubLogo from '../assets/tech-logos/github.svg';
import umbracoLogo from '../assets/tech-logos/umbraco.png';
import mysqlLogo from '../assets/tech-logos/mysql.svg';
import javascriptLogo from '../assets/tech-logos/javascript.png';
import apiLogo from '../assets/tech-logos/api.png';
import html5Logo from '../assets/tech-logos/html5.png';
import postmanLogo from '../assets/tech-logos/postman.png';
import powershellLogo from '../assets/tech-logos/powershell.png';
import bootstrapLogo from '../assets/tech-logos/bootstrap.png';
import javaLogo from '../assets/tech-logos/java.svg';
import pythonLogo from '../assets/tech-logos/python.svg';

const Technologies: React.FC = () => {
  const techStack = [
    { name: 'C#', logo: csharpLogo },
    { name: '.NET Core', logo: dotnetLogo },
    { name: 'Blazor', logo: blazorLogo },
    { name: 'HTML5', logo: html5Logo },
    { name: 'Rest API', logo: apiLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'CI/CD', logo: cicdLogo },
    { name: 'Azure', logo: azureLogo },
    { name: 'Firebase', logo: firebaseLogo },
    { name: 'GitHub', logo: githubLogo },
    { name: 'Entity Framework', logo: efLogo },
    { name: 'PostgreSQL', logo: postgresLogo },
    { name: 'Umbraco', logo: umbracoLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Postman', logo: postmanLogo },
    { name: 'Powershell', logo: powershellLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
  ];

  const serviceCards = [
    {
      icon: '{ }',
      title: 'Full-Stack Development',
      description: 'Modern, scalable applications built with enterprise-grade technologies. Focus on maintainability and performance.',
      features: [
        'Industry expert in C# and Java Enterprise Development',
        'TypeScript & React expertise',
        'Cloud-native solutions'
      ],
      link: 'View Full-Stack Services'
    },
    {
      icon: '🧠',
      title: 'AI & ML Solutions',
      description: 'Custom AI implementations that solve specific business challenges. Specializing in LLMs and optimization algorithms.',
      features: [
        'LLM-powered support systems with 80%+ accuracy',
        'Custom ML models'
      ],
      link: 'View AI Solutions'
    },
    {
      icon: '🔧',
      title: 'System Architecture',
      description: 'Cloud-native architectures and legacy system modernization. Professional within AWS infrastructure.',
      features: [
        'Part of driving mainframe to cloud migrations',
        'Experienced service owner and security engineer on AWS'
      ],
      link: 'View Architecture Services'
    }
  ];

  return (
    <section style={{
      padding: '7rem 5% 2rem',
      background: '#16181C',
      color: '#fff',
    }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
        marginBottom: '1rem',
        fontFamily: 'monospace',
      }}>
        Technologies & Expertise
      </h2>
      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 4rem',
        opacity: 0.8,
        fontSize: '1.1rem',
      }}>
        Leveraging modern technologies to build robust, scalable solutions for your business needs.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}>
        {techStack.map((tech) => (
          <div
            key={tech.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
              }}
            />
            <span style={{
              fontSize: '0.9rem',
              textAlign: 'center',
              opacity: 0.8,
            }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '8rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          marginBottom: '1rem',
          fontFamily: 'monospace',
        }}>
          Ways I Can Help Your Business
        </h2>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto 4rem',
          opacity: 0.8,
          fontSize: '1.1rem',
        }}>
          Let's work together to create solutions - I can help you with the following:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {serviceCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'left',
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
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {card.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: '#fff',
              }}>
                {card.title}
              </h3>
              <p style={{ 
                opacity: 0.8, 
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}>
                {card.description}
              </p>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                margin: '0 0 2rem 0',
              }}>
                {card.features.map((feature, i) => (
                  <li 
                    key={i}
                    style={{
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#4ade80',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  color: '#FFB800',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {card.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 