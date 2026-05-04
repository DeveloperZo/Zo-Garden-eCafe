import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quests from '../../data/quests.data';
import { useTheme } from '../../context/ThemeContext';
import './QuestDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBriefcase, faCalendarAlt, faTrophy, faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// This component can be used in two ways:
// 1. With an ID prop directly (when used in a component)
// 2. By reading the ID from the URL (when used in a route)
interface QuestDetailProps {
  id?: number; // Optional because we might get it from useParams
}

const QuestDetail: React.FC<QuestDetailProps> = ({ id: propId }) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const themeContext = useTheme();
  
  if (!themeContext) return null;
  
  // Get ID either from props or URL params
  const id = propId !== undefined ? propId : params.id ? parseInt(params.id, 10) : -1;
  const MAX_QUEST = quests.length-1;

  // Find the quest by ID
  const quest = quests.find((q) => q.id === id);
  // Create a sorted map of quest IDs by date
  const questIdByDate = quests
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
    .map(q => ({ id: q.id, startDate: q.startDate }));

  const currentIndex = questIdByDate.findIndex(q => q.id === id);
  const { theme } = themeContext;

  if (!quest) {
    return <p>Quest not found</p>;
  }

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(`/quests/${questIdByDate[currentIndex - 1].id}`);
    }
  };

  const goForward = () => {
    if (currentIndex < questIdByDate.length - 1) {
      navigate(`/quests/${questIdByDate[currentIndex + 1].id}`);
    }
  };
  
  // Format date nicely
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };
  
  // Calculate duration between dates
  const calculateDuration = () => {
    const isPresent = quest.endDate.getFullYear() >= 2030;
    const endDate = isPresent ? new Date() : quest.endDate;
    
    const diffInMonths = (endDate.getFullYear() - quest.startDate.getFullYear()) * 12 
      + (endDate.getMonth() - quest.startDate.getMonth());
    
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    
    let result = '';
    if (years > 0) {
      result += `${years} year${years > 1 ? 's' : ''}`;
    }
    
    if (months > 0) {
      if (result.length > 0) result += ', ';
      result += `${months} month${months > 1 ? 's' : ''}`;
    }
    
    return result || 'Less than a month';
  };

  return (
    <div className="quest-detail" data-type={quest.type || 'main'}>
      {(
        <div className="quest-header">
          <button className="back-button" onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          <button className="back-button" onClick={goForward}>
          Next<FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}

      <h1>{theme === 'work' ? quest.titles.sleek : quest.titles.retro}</h1>
      
      <div className="quest-metadata">
        {quest.company && (
          <div className="metadata-item">
            <FontAwesomeIcon icon={faBriefcase} className="metadata-icon" />
            <span>{quest.company}</span>
          </div>
        )}
        
        <div className="metadata-item">
          <FontAwesomeIcon icon={faCalendarAlt} className="metadata-icon" />
          <span>
            {formatDate(quest.startDate)} - {quest.endDate.getFullYear() >= 2030 
              ? "Present" 
              : formatDate(quest.endDate)}
            {' '}({calculateDuration()})
          </span>
        </div>
      </div>

      <div className="quest-description">
        {quest.summary && <p className="quest-summary">{quest.summary}</p>}
      </div>

      <div className="quest-section">
        <h3>
          <span className="section-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          Roles
        </h3>
        <ul className="role-badges">
          {quest.roles.map((role, index) => (
            <li key={index} className="badge">{role}</li>
          ))}
        </ul>
      </div>

      <div className="quest-section">
        <h3>
          <span className="section-icon">
            <FontAwesomeIcon icon={faTrophy} />
          </span>
          {theme === 'work' ? 'Key Accomplishments' : 'Achievements'}
        </h3>
        <ul className="accomplishments-list">
          {quest.accomplishments.map((accomplishment, index) => (
            <li key={index} className="accomplishment-item">
              {accomplishment.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="quest-section">
        <h3>
          <span className="section-icon">
            <FontAwesomeIcon icon={faLightbulb} />
          </span>
          {theme === 'work' ? 'Skills & Insights' : 'Rewards'}
        </h3>

        <ul className="learnings-list">
          {quest.accomplishments
            .flatMap((acc) => acc.learnings)
            .filter((learning, index, self) => learning && self.indexOf(learning) === index) // Remove duplicates
            .map((learning, index) => (
              <li key={index} className="learning-item">
                {learning}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestDetail;