import { BottomNavbar } from "../../components/Navbar";
import Tasks from "./tasks";
// import cookies from "js-cookies";

// const token = cookies.getItem("token");

export default function Dashboard() {
  return (
    <div>
      <Tasks />
      <BottomNavbar />
    </div>
  );
}
