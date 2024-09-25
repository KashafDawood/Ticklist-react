import SideMenu from "../SideMenu";
import React from "react";
import UserProfile from "../UserProfile";

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
