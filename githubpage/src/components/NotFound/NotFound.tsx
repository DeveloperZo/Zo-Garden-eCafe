// src/components/NotFound/NotFound.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme()!;
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goHome = () => {
    navigate('/main-menu');
  };

  return (
    <div className={`not-found-container ${theme}`}>
      {theme === 'play' ? (
        // Retro game style 404
        <div className="pixel-art-container">
          <h1 className="glitch-text">404</h1>
          <div className="pixel-character"></div>
          <p className="blink-text">QUEST NOT FOUND</p>
          <p>The princess is in another castle!</p>
          
          <div className="button-container">
            <button onClick={goBack} className="pixel-button">
              ← Previous Area
            </button>
            <button onClick={goHome} className="pixel-button">
              Return to Main Menu
            </button>
          </div>
        </div>
      ) : (
        // Professional style 404
        <div className="professional-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for might have been removed or is temporarily unavailable.</p>
          
          <div className="button-container">
            <button onClick={goBack} className="professional-button">
              Go Back
            </button>
            <button onClick={goHome} className="professional-button primary">
              Return to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotFound;