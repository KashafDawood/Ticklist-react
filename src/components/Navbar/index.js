import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./../DarkMode";
import { useEffect, useState } from "react";
import userLogout from "../../API/UserAPI/userLogout";
import getLoginUser from "./../../API/UserAPI/getLoginUser";
import "./style.css";

library.add(fas);

async function handleLogout() {
  await userLogout();
  localStorage.removeItem("userId");
  window.location.href = "/login";
}

export function Navbar() {
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
    <nav className="nav">
      <div>
        <DarkMode />
      </div>
      <div className="logo">TickList</div>
      {user ? (
        <div className="logoutBtn">
          <FontAwesomeIcon
            style={{ fontSize: "20px" }}
            icon={["fas", "circle-user"]}
          />
          <h3>{user.name.split(" ")[0]}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="loginBtn">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </nav>
  );
}

export function BottomNavbar() {
  return (
    <nav className="bottomNav">
      <ul>
        <li>
          <Link to={"/dashboard/tasks"}>
            <FontAwesomeIcon
              style={{ fontSize: "12px" }}
              icon={["fas", "list-check"]}
            />{" "}
            Projects Task
          </Link>
        </li>
        <li>
          <Link to={"/dashboard/chat"}>
            <FontAwesomeIcon
              style={{ fontSize: "12px" }}
              icon={["fas", "message"]}
            />{" "}
            Projects Chat
          </Link>
        </li>
      </ul>
    </nav>
  );
}
