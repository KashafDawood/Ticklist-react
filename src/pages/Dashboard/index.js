// export default function DashBoard() {
//   return <div>This is dashboard page</div>;
// }

import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

export default function Navbar() {
  return (
    <nav className="nav">
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
