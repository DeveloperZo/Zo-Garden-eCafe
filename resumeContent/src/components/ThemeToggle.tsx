// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import TVScreen from './TVScreen/TVScreen';
import WorkFrame from './WorkFrame/WorkFrame';

const ThemeToggle: React.FC = () => {
  const themeContext = useTheme();  // Get the current theme from context
  if(!themeContext){return null};

  const {theme} = themeContext;

  return (
    <div className={`app-container ${theme}`}>
      {/* Conditionally render TVScreen or PCMonitor */}
      {theme === 'play' ? <TVScreen type={'career'} /> : <WorkFrame type={'career'} />}
    </div>
  );
};

export default ThemeToggle; 
