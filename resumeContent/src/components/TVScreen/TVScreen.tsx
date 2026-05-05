import React from 'react';
import './TVScreen.css';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';

interface TVScreenProps {
  type?: 'career' | 'hobby' | 'education' | 'independent';
  children?: React.ReactNode;
}

const TVScreen: React.FC<TVScreenProps> = ({ type, children }) => {
  
  const {theme} = useTheme()!;
  
  // Only apply the label if we're in play mode and have a type
  const label = theme === 'play' && type ? labels[theme][type] : "";

  return (
    <div className="tv-frame-container">
      <div className="tv-screen">
        <div className="tv-content">
          {
            <>
              {label && <h1>{label}</h1>}
              {children}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default TVScreen;