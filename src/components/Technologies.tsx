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
import pythonLogo from '../assets/tech-logos/python.svg';
import styles from './Technologies.module.css';

const Technologies: React.FC = () => {
  const techStack = [
    { name: 'C#', logo: csharpLogo },
    { name: '.NET Core', logo: dotnetLogo },
    { name: 'Blazor', logo: blazorLogo },
    { name: 'HTML5', logo: html5Logo },
    { name: 'Rest API', logo: apiLogo },
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
  ];

  return (
    <section className={styles.technologies}>
      <h2 className={styles.title}>
        Technologies & Expertise
      </h2>
      <p className={styles.subtitle}>
        I leverage a modern tech stack to build robust, scalable, and secure solutions. My expertise spans across the entire development lifecycle, from initial design to deployment and maintenance.
      </p>

      <div className={styles.grid}>
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className={styles.techItem}
          >
            <img
              src={tech.logo}
              alt={`${tech.name} logo`}
              className={styles.techLogo}
            />
            <span className={styles.techName}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.services}>
        <h2 className={styles.title}>
          My Backend Development Services
        </h2>
        <p className={styles.subtitle}>
          I offer a range of backend development services to help you build and maintain the engine of your application.
        </p>

        <div className={styles.servicesGrid}>
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={styles.serviceCard}
            >
              <div className={styles.serviceIcon}>
                {card.icon}
              </div>
              <h3 className={styles.serviceTitle}>
                {card.title}
              </h3>
              <p className={styles.serviceDescription}>
                {card.description}
              </p>
              <ul className={styles.serviceFeatures}>
                {card.features.map((feature, i) => (
                  <li 
                    key={i}
                    className={styles.serviceFeature}
                  >
                    <span className={styles.serviceFeatureIcon}>✓</span>
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
 