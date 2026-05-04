// src/components/QuestCard/QuestCard.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './QuestCard.css';

interface QuestCardProps {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type?: 'career' | 'hobby' | 'education' | 'independent';
}

const QuestCard: React.FC<QuestCardProps> = ({ 
  title, 
  description, 
  startDate, 
  endDate,
  type = 'career'
}) => {
  const { theme } = useTheme()!;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const dateRange = `${formatDate(startDate)} – ${endDate.getFullYear() >= 2030 ? 'Present' : formatDate(endDate)}`;

  return (
    <div className={`quest-card ${theme} ${type}`}>
      <div className="quest-header">
        <h3>{title}</h3>
        <span className="quest-date">{dateRange}</span>
      </div>
      <p className="quest-description">{description}</p>
    </div>
  );
};

export default QuestCard;