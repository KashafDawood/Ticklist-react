import React, { useState, useEffect } from "react";
import getLoginUser from "./../../API/UserAPI/getLoginUser";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

library.add(fas);

export default function SideMenu() {
  const [user, setUser] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isprofile, setIsProfile] = useState(false);

  const handleIsExpanded = () => {
    setIsExpanded((prevState) => !prevState);
    setIsProfile(false);
  };

  const handleIsProfile = () => {
    setIsExpanded("true");
    setIsProfile((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getLoginUser();
        setUser(userData.data);
      } catch (error) {}
    };

    fetchUser();
  }, []);
  return (
    <div className="side-menu-container">
      <div className="side-menu">
        <div className="menu-header">
          <div className="logo icon-wrapper" onClick={handleIsExpanded}>
            <FontAwesomeIcon
              style={{ fontSize: "20px" }}
              icon={["fas", "angle-right"]}
            />
          </div>
          <div className="menu">
            <div>
              <p>
                <FontAwesomeIcon icon={["fas", "laptop"]} />
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "tasks"]} />
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "bars-progress"]} />
              </p>
            </div>
          </div>
        </div>
        <div
          className={`profile-container ${isprofile ? "isHover" : ""}`}
          onClick={handleIsProfile}
        >
          {user ? (
            <div className="userProfile">
              <FontAwesomeIcon
                style={{ fontSize: "25px" }}
                icon={["fas", "circle-user"]}
              />
              {isprofile && (
                <span className="userDetails">
                  <b className="userName">{user.name.split(" ")[0]}</b>
                  <span className="profile-model-btn">Profile</span>
                </span>
              )}
            </div>
          ) : (
            <div className="loginBtn">
              <Link to={"/login"}>
                <FontAwesomeIcon icon={["fas", "right-to-bracket"]} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className={`side-menu-extended ${isExpanded ? "" : "hidden"}`}>
        <div className="menu-header">
          <h2 className="logo-text">TickList</h2>
          <div className="menu">
            <div>
              <p>DashBoard</p>
              <p>Personal Tasks</p>
              <p>Projects</p>
            </div>
          </div>
        </div>
        {/* <div className="profile">
          {user ? (
            <div className="profile-btn">
              <div className="Profile-text">Profile</div>
              <FontAwesomeIcon icon={["fas", "angle-right"]} />
            </div>
          ) : (
            <div className="loginBtn">
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
