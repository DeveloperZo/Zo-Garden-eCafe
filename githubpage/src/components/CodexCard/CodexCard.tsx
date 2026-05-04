// CodexCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CodexCard.css';

interface CodexCardProps {
  id: number;
  title: string;
  dateAuthored: string;
  timeToRead: string;
  categories: string[];
}

const CodexCard: React.FC<CodexCardProps> = ({ id, title, dateAuthored, timeToRead, categories }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/codexDetail/${id}`);  // Navigate to the CodexDetail view using the id
  };

  return (
    <div className="codex-card" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{dateAuthored} • {timeToRead}</p>
      <div className="categories">
        {categories.map((category, index) => (
          <span key={index} className="category">{category}</span>
        ))}
      </div>
    </div>
  );
};

export default CodexCard;
