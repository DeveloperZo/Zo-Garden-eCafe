import React, { useState, useRef, useEffect } from "react";
import {
  faHome,
  faTasks,
  faList,
  faMedal,
  faSun,
  faMoon,
  faPaintRoller,
  faBars,
  faTimeline,
  faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { labels } from "../../data/labels";
import "./Navbar.css";


const Navbar: React.FC = () => {
  const {
    theme,
    setTheme,
    season,
    setSeason,
    timeOfDay,
    setTimeOfDay,
    overrideFlag,
    setOverrideFlag,
  } = useTheme()!;

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCustomizeOpen, setCustomizeOpen] = useState(false);

  // Ref for detecting clicks outside the "Customize" area
  const customizeContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        customizeContainerRef.current &&
        !customizeContainerRef.current.contains(e.target as Node)
      ) {
        setCustomizeOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (isCustomizeOpen || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCustomizeOpen, isMobileMenuOpen]);

  // Toggle between Retro and Sleek modes
  const modeToggleText = theme === "play" ? "Sleek Mode" : "Retro Mode";
  const modeIcon = theme === "play" ? faMoon : faSun;

  const handleSetSeason = (value: number) => {
    setOverrideFlag(true);
    setSeason(value);
    setDropdownOpen(true);
  };

  const handleSetTimeOfDay = (value: number) => {
    setOverrideFlag(true);
    setTimeOfDay(value);
    setDropdownOpen(true);
  };
  
  return (
    <nav className={`navbar ${theme}`}>
      {/* === HAMBURGER MENU === */}
      <div className="mobile-menu-container" ref={mobileMenuRef}>
        <button className={`hamburger ${theme}`} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={faBars} /> Menu
        </button>

        {isMobileMenuOpen && (
          <div className={`mobile-dropdown ${theme}`}>
            <Link to="/main-menu">
              <FontAwesomeIcon icon={faHome} /> {labels[theme]["mainMenu"]}
            </Link>
            <Link to="/timeline">
              <FontAwesomeIcon icon={faTimeline} /> {labels[theme]["timeline"]}
            </Link>
            <Link to="/accomplishments">
              <FontAwesomeIcon icon={faMedal} /> {labels[theme]["accomplishments"]}
            </Link>
            {theme === 'work' && (<Link to="/resume">
          <FontAwesomeIcon icon={faStickyNote} /> {labels[theme]["resume"]}
        </Link>)}
            {/* Divider for visual separation */}
            <hr className={`menu-divider ${theme}`} />

            {/* Mode Toggle */}
            <button className={`mode-toggle ${theme}`} onClick={() => setTheme(theme === "play" ? "work" : "play")}>
              <FontAwesomeIcon icon={modeIcon} /> {modeToggleText}
            </button>

            {/* Customize (only in Retro Mode) */}
            {theme === 'play' && (
              <button className={`customize-toggle ${theme}`} onClick={() => setCustomizeOpen(!isCustomizeOpen)}>
                <FontAwesomeIcon icon={faPaintRoller} /> Customize
              </button>
            )}
          </div>
        )}
      </div>

      {/* === NAVIGATION LINKS (Hidden on mobile) === */}
      <div className={`nav-links ${theme}`}>
        <Link to="/main-menu">
          <FontAwesomeIcon icon={faHome} /> {labels[theme]["mainMenu"]}
        </Link>
        <Link to="/timeline">
          <FontAwesomeIcon icon={faTimeline} /> {labels[theme]["timeline"]}
        </Link>
        <Link to="/accomplishments">
          <FontAwesomeIcon icon={faMedal} /> {labels[theme]["accomplishments"]}
        </Link>
        {theme === 'work' && (<Link to="/resume">
          <FontAwesomeIcon icon={faStickyNote} /> {labels[theme]["resume"]}
        </Link>)}

        {/* Mode Toggle */}
        <button className={`mode-toggle ${theme}`} onClick={() => setTheme(theme === "play" ? "work" : "play")}>
          <FontAwesomeIcon icon={modeIcon} /> {modeToggleText}
        </button>

        {/* Customize (only in Retro Mode) */}
        {theme === 'play' && (
          <button className={`customize-toggle ${theme}`} onClick={() => setCustomizeOpen(!isCustomizeOpen)}>
            <FontAwesomeIcon icon={faPaintRoller} /> Customize
          </button>
        )}
      </div>

      {/* === CUSTOMIZE DROPDOWN (Only in Retro Mode) === */}
      {theme === 'play' && isCustomizeOpen && (
        <div className={`dropdown ${theme}`} ref={customizeContainerRef}>
          <ul className={`dropdown-menu ${theme}`}>
            <li>
              <div className={`group-title ${theme}`}>
                Season
                <br />
                <label>
                  <input type="checkbox" checked={!overrideFlag} onChange={(e) => setOverrideFlag(!e.target.checked)} />
                  Auto
                </label>
              </div>
              <div className={`theme-control ${theme}`}>
                <input type="range" min="1" max="4" step="1" value={season} onChange={(e) => handleSetSeason(parseFloat(e.target.value))} className={`slider ${theme}`} />
              </div>
              <div className={`slider-labels ${theme}`}>
                <span className="season-icon winter-icon">❄️</span>
                <span className="season-icon spring-icon">🌸</span>
                <span className="season-icon summer-icon">☀️</span>
                <span className="season-icon autumn-icon">🍂</span>
              </div>
            </li>
            <li>
              <div className={`group-title ${theme}`}>Time of Day</div>
              <div className={`theme-control ${theme}`}>
                <input type="range" min="0" max="1" step="0.01" value={timeOfDay} onChange={(e) => handleSetTimeOfDay(parseFloat(e.target.value))} className={`slider ${theme}`} />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;