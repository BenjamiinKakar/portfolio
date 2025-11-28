import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending...');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('message', formData.message);
    data.append('_replyto', formData.email);


    try {
      const response = await fetch('https://formspree.io/f/mnnkvley', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: data
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: ''});
      } else {
        setStatusMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        maxWidth: '800px',
        margin: '0 auto',
        alignItems: 'start'
      }}>
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
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
              htmlFor="phoneNumber"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#64ffda',
              }}
            >
              Your Phone Number
            </label>
            <input
              type="tel" // Changed type to "tel" for phone numbers
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
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
              required
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: '#64ffda',
                color: '#0f172a',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontWeight: 500,
                transition: 'transform 0.2s, opacity 0.2s',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {statusMessage && (
            <p style={{
              textAlign: 'center',
              marginTop: '1rem',
              color: statusMessage.includes('successfully') ? '#64ffda' : '#ff6b6b',
            }}>
              {statusMessage}
            </p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
 