import { BottomNavbar } from "../../components/Navbar";
import Tasks from "./tasks";

export default function Dashboard() {
  return (
    <div>
      <Tasks />
      <BottomNavbar />
    </div>
  );
}
