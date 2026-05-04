// src/AppRoutes.tsx
import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainMenu from './components/MainMenu/MainMenu';
import Accomplishments from './components/Accomplishments/Accomplishments';
import QuestSwitcher from './components/QuestSwitcher/QuestSwitcher';
import QuestDetail from './components/QuestDetail/QuestDetail';
import NotFound from './components/NotFound/NotFound';
import quests from './data/quests.data';
import CareerTimeline from './components/CareerTimeline/CareerTimeline';
import ResumeView from './components/ResumeView/ResumeView';

// ScrollToTop component to reset scroll position when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// QuestDetailWrapper component for individual quest pages
const QuestDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const parsedId = parseInt(id || '-1', 10);
  
  // Check if quest exists
  const questExists = useMemo(() => {
    return quests.some(quest => quest.id === parsedId);
  }, [parsedId]);
  
  // Redirect to NotFound if quest doesn't exist
  useEffect(() => {
    if (!questExists && parsedId !== -1) {
      navigate('/not-found', { replace: true });
    }
  }, [questExists, parsedId, navigate]);
  
  return questExists ? (
    <QuestDetail id={parsedId} />
  ) : null;
};

const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Default route redirects to main menu */}
        <Route path="/" element={<Navigate to="/main-menu" replace />} />
        
        {/* Main Menu */}
        <Route path="/main-menu" element={
          <QuestSwitcher>
            <Navbar />
            <MainMenu />
          </QuestSwitcher>
        } />
                
        {/* Individual Quest Detail */}
        <Route path="/quests/:id" element={
          <QuestSwitcher>
            <Navbar />
            <QuestDetailWrapper />
          </QuestSwitcher>
        } />
        
        {/* Accomplishments */}
        <Route path="/accomplishments" element={
          <QuestSwitcher type="career">
            <Navbar />
            <Accomplishments />
          </QuestSwitcher>
        } />

        {/* Timelines */}
        <Route path="/timeline" element={
          <QuestSwitcher type="career">
            <Navbar />
            <CareerTimeline />
          </QuestSwitcher>
        } />
        
        <Route path="/resume" element={
          <QuestSwitcher type="career">
            <Navbar />
            <ResumeView />
          </QuestSwitcher>
        } />

        {/* 404 Not Found */}
        <Route path="/not-found" element={
          <QuestSwitcher>
            <Navbar />
            <NotFound />
          </QuestSwitcher>
        } />
        
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;