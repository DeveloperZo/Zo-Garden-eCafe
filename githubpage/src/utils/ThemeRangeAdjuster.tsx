import React, { useState, useEffect } from 'react';
import { THEME_CONFIG } from '../utils/interpolateTheme';

/**
 * Theme Range Adjuster Component
 * Allows dynamic adjustment of theme color range and darkness base
 */
const ThemeRangeAdjuster: React.FC = () => {
  const [range, setRange] = useState(THEME_CONFIG.COLOR_RANGE);
  const [darkness, setDarkness] = useState(THEME_CONFIG.BASE_DARKNESS);
  
  // Update the THEME_CONFIG when sliders change
  useEffect(() => {
    THEME_CONFIG.COLOR_RANGE = range;
    THEME_CONFIG.BASE_DARKNESS = darkness;
    
    // Force a small change to trigger theme recomputation
    const root = document.documentElement;
    const current = getComputedStyle(root).getPropertyValue('--theme-update-trigger') || '0';
    root.style.setProperty('--theme-update-trigger', current === '0' ? '1' : '0');
  }, [range, darkness]);
  
  return (
    <div className="theme-range-adjuster">
      <h3>Theme Range Settings</h3>
      
      <div className="slider-control">
        <label>Color Range: {(range * 100).toFixed(0)}%</label>
        <input 
          type="range" 
          min="0.05" 
          max="1" 
          step="0.05" 
          value={range} 
          onChange={(e) => setRange(parseFloat(e.target.value))}
          className="slider"
        />
        <div className="slider-description">
          <span>Subtle</span>
          <span>Dramatic</span>
        </div>
      </div>
      
      <div className="slider-control">
        <label>Darkness Base: {(darkness * 100).toFixed(0)}%</label>
        <input 
          type="range" 
          min="0.1" 
          max="0.7" 
          step="0.05" 
          value={darkness} 
          onChange={(e) => setDarkness(parseFloat(e.target.value))}
          className="slider"
        />
        <div className="slider-description">
          <span>Lighter</span>
          <span>Darker</span>
        </div>
      </div>
      
    </div>
  );
};

export default ThemeRangeAdjuster;