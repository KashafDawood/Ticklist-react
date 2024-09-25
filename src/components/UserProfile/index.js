import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getLoginUser from "../../API/UserAPI/getLoginUser";
import "./style.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);

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
    <div className="userprofile-container">
      <div className="user-greet">
        <h2 className="user-name">
          Hi,{" "}
          {user?.name.charAt(0).toUpperCase() +
            user?.name.split(" ")[0].slice(1)}
        </h2>
        <p>Let's finish your task today!</p>
      </div>
      <div className="user-setting icon-wrapper">
        <span className="user-notification">
          <FontAwesomeIcon icon={["fas", "bell"]} />
        </span>
        <span className="user-img">
          <FontAwesomeIcon icon={["fas", "user-circle"]} />
        </span>
      </div>
    </div>
  );
}
