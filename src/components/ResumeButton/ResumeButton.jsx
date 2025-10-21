import React from 'react';
import './ResumeButton.css';
import resume from '../../assets/Elie Ephram-CV-2025.pdf';

const ResumeButton = () => {
  const handleClick = () => {
    window.open(resume, '_blank', 'noopener,noreferrer');
  };

  return (
    <button onClick={handleClick} className="resume-btn">
      Download My Resume
    </button>
  );
};

export default ResumeButton;
