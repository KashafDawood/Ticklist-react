import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMessage,
  faTasks,
  faBarsProgress,
  faSignOutAlt,
  faAngleLeft,
  faAngleRight,
  faUserCircle,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import getLoginUser from "../../API/UserAPI/getLoginUser";
import "./style.css";

export default function SideMenu() {
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getLoginUser();
        setUser(userData.data);
      } catch (error) {}
    };

    fetchUser();
  }, []);

  function handleLogout() {
    localStorage.removeItem("userId");
    window.location.href = "/login";
  }

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        {!isExpanded ? (
          <div className="profile-info">
            <FontAwesomeIcon icon={faUserCircle} className="profile-pic" />
          </div>
        ) : (
          <div className="expanded-profile-info">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="profile-pic expanded-profile-pic"
            />
            <span className="profile-name">
              {user?.name.toUpperCase().split(" ")[0]}
            </span>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}
        <div className="toggle-btn" onClick={handleExpandToggle}>
          {isExpanded ? (
            <FontAwesomeIcon className="icon-wrapper" icon={faAngleLeft} />
          ) : (
            <FontAwesomeIcon className="icon-wrapper" icon={faAngleRight} />
          )}
        </div>
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
