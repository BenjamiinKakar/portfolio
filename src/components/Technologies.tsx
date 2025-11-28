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
      description: 'Building robust and scalable web applications from front-end to back-end, with a focus on clean code and user-friendly experiences.',
      features: [
        'Expertise in C#, .NET Core, and ASP.NET.',
        'Modern front-ends with TypeScript, React, and Blazor.',
        'Databases: MSSQL, MySQL, and Firebase.'
      ],
      link: 'Explore Development Services'
    },
    {
      icon: '⚙️',
      title: 'System Integration & Automation',
      description: 'Designing and maintaining robust APIs and automated services to streamline workflows and improve data communication between systems.',
      features: [
        'Integration with critical systems like MitID and e-Boks.',
        'RESTful API design and development.',
        'Automated services to eliminate manual tasks.'
      ],
      link: 'Discover Integration Solutions'
    },
    {
      icon: '☁️',
      title: 'System Architecture & Cloud',
      description: 'Applying Clean Architecture and SOLID principles to create modular, testable, and maintainable software solutions, deployed on Azure.',
      features: [
        'Expertise in Clean Architecture and SOLID principles.',
        'Azure Cloud Deployment.',
        'CI/CD with GitHub Actions.'
      ],
      link: 'Learn about Architecture'
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
        I leverage a modern tech stack to build robust, scalable, and secure solutions. My expertise spans across the entire development lifecycle, from initial design to deployment and maintenance.
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
          My Backend Development Services
        </h2>
        <p style={{
          maxWidth: '800px',
          margin: '0 auto 4rem',
          opacity: 0.8,
          fontSize: '1.1rem',
        }}>
          I offer a range of backend development services to help you build and maintain the engine of your application.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {[
            {
              icon: '</>',
              title: 'API Development & Integration',
              description: 'I design and build secure, scalable, and well-documented RESTful APIs that power your applications and facilitate seamless communication between systems.',
              features: [
                'RESTful API design and development.',
                'Integration with third-party services.',
                'API security and authentication.'
              ]
            },
            {
              icon: '⚙️',
              title: 'System Architecture & Design',
              description: 'I apply proven architectural patterns and principles like SOLID and Clean Architecture to create backend systems that are modular, testable, and easy to maintain.',
              features: [
                'Clean Architecture and SOLID principles.',
                'Microservices and monolithic architectures.',
                'Database design and optimization.'
              ]
            },
            {
              icon: '☁️',
              title: 'Cloud & DevOps',
              description: 'I have experience in deploying and managing backend services on cloud platforms like Azure, and I can help you set up CI/CD pipelines to automate your development workflow.',
              features: [
                'Azure Cloud deployment and services.',
                'CI/CD with GitHub Actions.',
                'Docker and containerization.'
              ]
            }
          ].map((card, index) => (
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
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
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
                flexGrow: 1,
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 