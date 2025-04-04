import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      image: '/testimonials/sarah.jpg',
      quote: "Benjamin's expertise in cloud architecture helped us modernize our infrastructure, resulting in a 40% reduction in operational costs.",
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at InnovateX',
      image: '/testimonials/michael.jpg',
      quote: "Working with Benjamin was a game-changer for our project. His deep understanding of both frontend and backend technologies ensured we delivered a robust solution on time.",
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Startup Founder',
      image: '/testimonials/emma.jpg',
      quote: "Benjamin's ability to translate complex technical requirements into user-friendly solutions helped us create a product that our customers love.",
      rating: 5
    }
  ];

  return (
    <section style={{
      padding: '7rem 5%',
      background: '#16181C',
      color: '#fff',
    }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
        marginBottom: '1rem',
        fontFamily: 'monospace',
      }}>
        Client Testimonials
      </h2>
      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 4rem',
        opacity: 0.8,
        fontSize: '1.1rem',
      }}>
        Here's what clients have to say about working with me
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#1a1f2e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#64ffda',
              }}>
                {testimonial.name[0]}
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 0.25rem 0',
                  fontSize: '1.1rem',
                }}>
                  {testimonial.name}
                </h3>
                <p style={{
                  margin: '0',
                  fontSize: '0.9rem',
                  opacity: 0.8,
                }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p style={{
              margin: '0 0 1.5rem 0',
              lineHeight: 1.6,
              opacity: 0.9,
            }}>
              "{testimonial.quote}"
            </p>
            <div style={{
              display: 'flex',
              gap: '0.25rem',
            }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: '#FFB800',
                    fontSize: '1.2rem',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 