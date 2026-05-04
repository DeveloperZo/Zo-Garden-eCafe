// src/components/Timeline/Timeline.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import quests from '../../data/quests.data';
import './CareerTimeline.css';

const CareerTimeline: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme()!;
  
  // Filter and sort quests - only showing main quests in chronological order
  const sortedQuests = [...quests]
    .filter(quest => quest.type !== 'hobby')
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
          {theme === 'play' ? (
            <>
              <div className="pixel-avatar"></div>
              <p className="summary-text">
              Level 10+ Software Architect with special abilities in strategic leadership and system modernization. Has completed over 50 quests across multiple guilds, mastering skills in architecture, cloud systems, and team leadership. Ready for the next epic adventure!
              </p>
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
            </>
          ) : (
            <>
  <p className="summary-text">
    Strategic technology leader with over a decade of experience in software architecture and development. Demonstrated expertise in transforming legacy systems, leading cross-functional teams, and implementing scalable architectures across multiple industries. Consistently delivers solutions through thoughtful architectural decisions and effective team leadership.
  </p>
              
              <div className="competencies">
                <h3>Core Competencies</h3>
                <ul className="competency-list">
                <li>
        <strong>Technical Leadership:</strong> Proven ability to lead technical implementations during organizational transitions, providing continuity between development teams and executive leadership while mentoring senior developers.
      </li>
      <li>
        <strong>Financial & Healthcare Solutions:</strong> Specialized experience delivering enterprise applications for financial lending platforms and healthcare systems, ensuring regulatory compliance and maintaining critical integrations.
      </li>
      <li>
        <strong>Cloud Infrastructure Design:</strong> Advanced knowledge of Azure services with ability to define and manage cloud infrastructures from initial planning through implementation and ongoing support.
      </li>
      <li>
        <strong>Multi-stack Development:</strong> Versatile technical proficiency across multiple technology stacks including .NET, Java Spring Boot, React, Angular, Flutter, and various other frameworks and languages.
      </li>
      <li>
        <strong>AI Implementation:</strong> Practical experience leveraging AI tools and integrations to enhance workflows, automate processes, and improve productivity across both professional and personal projects.
      </li>
                </ul>
              </div>
            </>
          )}
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
          const conciseDescription = theme === 'play' 
            ? getRetroDescription(quest.description, quest.roles[0])
            : getSleekDescription(quest.description, quest.roles[0]);
          
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
                  <div className="pixel-icon role-icon-${quest.roles[0].toLowerCase().replace(/\s+/g, '-')}"></div>
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

// Helper function to create retro-style descriptions
const getRetroDescription = (description: string, role: string) => {
  // Role-based retro descriptions
  const rolePrefixes: Record<string, string> = {
    'Software Architect': 'Wielded the Architect\'s Staff to ',
    'Senior Consultant': 'Embarked on a quest to ',
    'Team Lead': 'Led a party of developers to ',
    'Interim Director of Engineering': 'Commanded the Engineering Guild to ',
    'Developer': 'Crafted code spells to ',
    'ITCFP Participant': 'Trained across multiple disciplines to '
  };

  const prefix = rolePrefixes[role] || 'Ventured forth to ';
  const cleanDesc = description.replace(/^Led |Transformed |Co-led |Enhanced |Developed |Rotated /, '');
  return prefix + cleanDesc.charAt(0).toLowerCase() + cleanDesc.slice(1);
};

// Helper function to create sleek professional descriptions
const getSleekDescription = (description: string, role: string) => {
  // For sleek mode, we'll keep it professional but more concise
  return description.replace(/\.$/, '');
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