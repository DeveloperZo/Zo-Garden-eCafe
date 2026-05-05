// src/components/QuestSwitcher/QuestSwitcher.tsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import TVScreen from '../TVScreen/TVScreen';
import WorkFrame from '../WorkFrame/WorkFrame';

interface QuestSwitcherProps {
  type?: 'career' | 'hobby' | 'education' | 'independent';
  children?: React.ReactNode;
}

const QuestSwitcher: React.FC<QuestSwitcherProps> = ({ type, children }) => {
  const themeContext = useTheme()!;  // Get the current theme from context
  const {theme} = themeContext;

  return (
    <>
      {theme === 'play' ? (
        <TVScreen type={type} children={children}/>  // Render TVScreen (Play) for the given quest type
      ) : (
        <WorkFrame type={type} children={children}/>  // Render PCMonitor (Work) for the given quest type
      )}
    </>
  );
};

export default QuestSwitcher;
