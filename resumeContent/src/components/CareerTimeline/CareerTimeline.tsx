// src/components/Timeline/Timeline.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import quests from '../../data/quests.data';
import { coreCompetencies, professionalSummary } from '../../data/profile.data';
import './CareerTimeline.css';

const CareerTimeline: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme()!;
  
  // Sort quests in chronological order. Side projects sit inline with roles.
  const sortedQuests = [...quests]
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime()); // Chronological order

  const handleQuestClick = (id: number) => {
    navigate(`/quests/${id}`);
  };

  // Format date as month and year
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  };
  
  // Calculate duration between two dates in months and years - corrected version
  const calculateDuration = (startDate: Date, endDate: Date) => {
    const isPresent = endDate.getFullYear() >= 2030;
    const end = isPresent ? new Date() : endDate;
    
    // Calculate total months between dates
    let months = (end.getFullYear() - startDate.getFullYear()) * 12;
    months += end.getMonth() - startDate.getMonth();
    
    // Adjust for partial months
    if (end.getDate() < startDate.getDate()) {
      months--;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  };

  return (
    <div className={`timeline-container ${theme}`}>
      {/* Summary Section at the top */}
      <div className="career-summary">
        <h2>{theme === 'play' ? 'Alonzo\'s Adventure Scroll' : 'Professional Summary'}</h2>
        
        <div className="summary-content">
          {theme === 'play' && <div className="pixel-avatar"></div>}
          <p className="summary-text">{professionalSummary}</p>
          {theme === 'play' && (
            <div className="summary-stats-container">
              <div className="stat-item">
                <span className="stat-icon exp-icon"></span>
                <span className="stat-value">{calculateTotalExperience(sortedQuests)}</span>
                <span className="stat-label">EXP</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon quest-icon"></span>
                <span className="stat-value">
                  {sortedQuests.reduce((sum, quest) => sum + quest.accomplishments.length, 0)}
                </span>
                <span className="stat-label">QUESTS</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon skill-icon"></span>
                <span className="stat-value">
                  {new Set(sortedQuests.flatMap(quest =>
                    quest.accomplishments.flatMap(acc => acc.learnings)
                  )).size}
                </span>
                <span className="stat-label">SKILLS</span>
              </div>
            </div>
          )}
          <div className="competencies">
            <h3>Core Competencies</h3>
            <ul className="competency-list">
              {coreCompetencies.map((competency) => (
                <li key={competency.title}>
                  <strong>{competency.title}:</strong> {competency.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <h2 className="timeline-title">
        {theme === 'play' ? 'Adventure Map' : 'Career Timeline'}
      </h2>
      
      <div className="timeline">
        <div className="timeline-line"></div>
        
        {sortedQuests.map((quest, index) => {
          const isPresent = quest.endDate.getFullYear() >= 2030;
          
          // Create more concise descriptions based on theme
          // Descriptions are authored as role overviews and render as written in both themes.
          const conciseDescription = quest.description;
          
          return (
            <div 
              key={quest.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-type={quest.type || 'career'}
              onClick={() => handleQuestClick(quest.id)}
            >
              <div className="timeline-connector"></div>
              <div className="timeline-content" data-type={quest.type || 'career'}>
                {theme === 'play' && (
                  <div className={`pixel-icon role-icon-${quest.roles[0].toLowerCase().replace(/\s+/g, '-')}`}></div>
                )}
                
                <div className="timeline-date">
                  <span>{formatDate(quest.startDate)}</span>
                  {' — '}
                  <span>{isPresent ? 'Present' : formatDate(quest.endDate)}</span>
                </div>
                
                <h3 className="timeline-heading">
                  {theme === 'play' ? quest.titles.retro : quest.titles.sleek}
                </h3>
                
                {quest.company && (
                  <div className="timeline-company">{quest.company}</div>
                )}
                
                <div className="timeline-duration">
                  {calculateDuration(quest.startDate, quest.endDate)}
                </div>
                
                <p className="timeline-description">{conciseDescription}</p>
                
                <div className="timeline-roles">
                  {quest.roles.map((role, i) => (
                    <span key={i} className="timeline-role-badge">{role}</span>
                  ))}
                </div>
                
                <div className="timeline-stats">
                  <div className="timeline-stat">
                    <span className="stat-label">{theme === 'play' ? 'Quests' : 'Achievements'}</span>
                    <span className="stat-value">{quest.accomplishments.length}</span>
                  </div>
                  
                  <div className="timeline-stat">
                    <span className="stat-label">{theme === 'play' ? 'Skills' : 'Skills Gained'}</span>
                    <span className="stat-value">
                      {new Set(quest.accomplishments.flatMap(a => a.learnings)).size}
                    </span>
                  </div>
                </div>
                
                <div className="timeline-cta">
                  {theme === 'play' ? 'View Quest Details' : 'View Details'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Calculate total years of experience
const calculateTotalExperience = (quests: any[]) => {
  if (quests.length === 0) return "0";
  
  // Find earliest start date and latest end date
  const startDates = quests.map(q => q.startDate.getTime());
  const endDates = quests.map(q => {
    return q.endDate.getFullYear() >= 2030 ? new Date().getTime() : q.endDate.getTime();
  });
  
  const earliestStart = new Date(Math.min(...startDates));
  const latestEnd = new Date(Math.max(...endDates));
  
  // Calculate months
  let months = (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12;
  months += latestEnd.getMonth() - earliestStart.getMonth();
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths}M`;
  } else if (remainingMonths === 0) {
    return `${years}Y`;
  } else {
    return `${years}Y ${remainingMonths}M`;
  }
};

export default CareerTimeline;