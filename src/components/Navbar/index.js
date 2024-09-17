import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./../DarkMode";
import cookies from "js-cookies";
import "./Navbar.css";

library.add(fas);
const user = JSON.parse(localStorage.getItem("user"));

function handleLogout() {
  localStorage.removeItem("user");
  cookies.removeItem("token");
  window.location.href = "/login";
}

export function Navbar() {
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
