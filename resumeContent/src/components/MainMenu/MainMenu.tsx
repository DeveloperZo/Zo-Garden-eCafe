// src/components/MainMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';
import { useTheme } from '../../context/ThemeContext';
import { labels } from '../../data/labels';

const MainMenu: React.FC = () => {
  const history = useNavigate();
  const {theme} = useTheme()!;

  const accomplishmentLabel = labels[theme]["accomplishments"];
  const timelineLabel = labels[theme]["timeline"];
  const titleLabel = labels[theme]['mainTitle']
  const resumeLabel = labels[theme]['resume']

  const goToAccomplishment = () => {
    history('/accomplishments');
  };
  const goToTimeline = () => {
    history('/timeline');
  };
  const goToResume = () => {
    history('/resume');
  };

  return (
    <div className="main-menu">
      <h1>{titleLabel}</h1>
      <button onClick={goToTimeline}>{timelineLabel}</button>
      <button onClick={goToAccomplishment}>{accomplishmentLabel}</button>
      <button onClick={goToResume}>{resumeLabel}</button>
      
    </div>
  );
};

export default MainMenu;
