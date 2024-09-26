import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./../../images/TicklistLogo.png";
import {
  faHome,
  faMessage,
  faTasks,
  faBarsProgress,
  faSignOutAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setLightMode();
      setIsDarkMode(false);
    } else {
      setDarkMode();
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode();
      setIsDarkMode(true);
    } else {
      setLightMode();
      setIsDarkMode(false);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  }

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <div className="sidebar-header">
        {!isExpanded ? (
          <div className="logo">
            <img src={Logo} alt="Ticklist Logo" className="logo-img" />
          </div>
        ) : (
          <div className="expanded-logo">
            <img src={Logo} alt="Ticklist Logo" className="logo-img" />
            <span className="logo-text">TickList</span>
          </div>
        )}
      </div>

      <div className="sidebar-menu">
        <MenuItem icon={faHome} label="Dashboard" isExpanded={isExpanded} />
        <MenuItem icon={faMessage} label="Messages" isExpanded={isExpanded} />
        <MenuItem icon={faTasks} label="Tasks" isExpanded={isExpanded} />
        <MenuItem
          icon={faBarsProgress}
          label="Projects"
          isExpanded={isExpanded}
        />
      </div>

      <div className="sidebar-footer">
        <MenuItem
          onClick={toggleDarkMode}
          icon={isDarkMode ? faSun : faMoon}
          label={isDarkMode ? "Light Mode" : "Dark Mode"}
          isExpanded={isExpanded}
        />
        <MenuItem
          onClick={handleLogout}
          icon={faSignOutAlt}
          label="Logout"
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
}

const MenuItem = ({ icon, label, isExpanded, onClick }) => (
  <div className="menu-item" onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
    {isExpanded && <span>{label}</span>}
    {!isExpanded && <div className="tooltip">{label}</div>}
  </div>
);
