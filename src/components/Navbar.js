import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

export function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>lightmode</li>
        <li>TickList</li>
        <li>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
          <FontAwesomeIcon
            style={{ fontSize: "20px" }}
            icon={["fas", "circle-user"]}
          />
        </li>
      </ul>
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
