// New Component for Collapsible Section
import React, { useState } from 'react';
import './CollapsibleSection.css';

interface CollapsibleSectionProps {
    title: string;
    children?: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapsible-section ${isOpen ? 'open' : ''}`}>
      <h3 onClick={() => setIsOpen(!isOpen)} className="collapsible-title">
        {title} <span className="toggle-icon">{isOpen ? '▼' : '▶'}</span>
      </h3>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
