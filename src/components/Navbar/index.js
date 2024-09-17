import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./../DarkMode";
import "./Navbar.css";

library.add(fas);

export function Navbar() {
  return (
    <nav className="nav">
      <div>
        <DarkMode />
      </div>
      <div className="logo">TickList</div>
      <div className="loginBtn">
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
        <FontAwesomeIcon
          style={{ fontSize: "20px" }}
          icon={["fas", "circle-user"]}
        />
      </div>
    </nav>
  );
}

export function BottomNavbar() {
  return (
    <nav className="bottomNav">
      <ul>
        <li>
          <Link to={"/projects"}>
            <FontAwesomeIcon
              style={{ fontSize: "12px" }}
              icon={["fas", "list-check"]}
            />{" "}
            Projects Task
          </Link>
        </li>
        <li>
          <Link to={"/chat"}>
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
