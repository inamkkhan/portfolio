import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaComments, FaEnvelopeOpen } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './typegraphy.css';

const Typography = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    { id: 'home', icon: <FaHome />, text: 'Home', link: '/' },
    { id: 'about', icon: <FaUser />, text: 'About', link: '/about' },
    { id: 'portfolio', icon: <FaBriefcase />, text: 'Portfolio', link: '/portfolio' },
    { id: 'contact', icon: <FaEnvelopeOpen />, text: 'Contact', link: '/contact' },
    { id: 'blog', icon: <FaComments />, text: 'Blog', link: '/blog' },
  ];

  return (
    <div className="sidebar">
      {buttons.map((btn) => (
        <div
          key={btn.id}
          className={`sidebar-btn ${location.pathname === btn.link ? 'active' : ''}`}
          onClick={() => navigate(btn.link)}
        >
          <span className="icon">{btn.icon}</span>
          <span className="btn-text">{btn.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Typography;
