import React from 'react';
import '../styles/WorkWithUs.css';
import heroImage from '../assets/images/work-with-us-hero.jpg';

const WorkWithUs = () => {
  return (
    <div className="work-with-us">
      <div className="hero-section">
        <img src={heroImage} alt="Work with Us Hero" className="hero-image" />
        <div className="hero-text">
          <h2>Work With Us</h2>
          <p>Take the next step in your career with Credera.</p>
          <a href="#join-our-team" className="hero-button">Join Our Team</a>
        </div>
      </div>
      <div className="content">
        <h2>Join Our Team</h2>
        <p>We are always looking for talented individuals to join our team. If you are passionate about technology and innovation, we would love to hear from you.</p>
        
        <h2>Why Work With Us?</h2>
        <p>At our company, we foster a collaborative and inclusive environment where everyone can thrive. We offer:</p>
        <ul>
          <li>Competitive salaries and benefits</li>
          <li>Flexible working hours</li>
          <li>Opportunities for career growth</li>
          <li>Continuous learning and development</li>
        </ul>
        
        <h2 id="join-our-team">Current Openings</h2>
        <div className="job-listings">
          <div className="job">
            <h3>Software Engineer</h3>
            <p>As a software engineer, you will be responsible for developing high-quality software solutions. You should have experience with JavaScript, React, and Node.js.</p>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Type:</strong> Full-time</p>
            <a href="mailto:hr@example.com?subject=Application for Software Engineer">Apply Now &rarr;</a>
          </div>
          <div className="job">
            <h3>Product Manager</h3>
            <p>We are looking for a product manager to oversee the development and delivery of our products. You should have experience in product management and a strong understanding of the tech industry.</p>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Type:</strong> Full-time</p>
            <a href="mailto:hr@example.com?subject=Application for Product Manager">Apply Now &rarr;</a>
          </div>
        </div>
        
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>If you have any questions or need more information, please reach out to us at:</p>
          <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
          <p>Phone: <a href="tel:+123456789">+1 (234) 567-89</a></p>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;