import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        Get In Touch
      </h2>
      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 4rem',
        opacity: 0.8,
        fontSize: '1.1rem',
      }}>
        Have a project in mind? Let's discuss how I can help bring your ideas to life.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
          }}>
            Contact Information
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}>
                Email
              </h4>
              <p style={{ margin: 0, opacity: 0.8 }}>
                benjaminkakar@gmail.com
              </p>
            </div>
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}>
                Location
              </h4>
              <p style={{ margin: 0, opacity: 0.8 }}>
                Copenhagen, Denmark
              </p>
            </div>
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}>
                Social Links
              </h4>
              <div style={{
                display: 'flex',
                gap: '1rem',
              }}>
                <a
                  href="https://www.linkedin.com/in/benjamin-kakar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#fff',
                fontSize: '1rem',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#fff',
                fontSize: '1rem',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: '#fff',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: '#64ffda',
              color: '#0f172a',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 