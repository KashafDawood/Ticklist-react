import SideMenu from "../SideMenu";
import React from "react";
import UserProfile from "../UserProfile";
import "./style.css";

const PrivateLayout = ({ children }) => {
  return (
    <div className="privateLayout-container">
      <SideMenu />
      <div className="privateLayout-main">
        <UserProfile />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
