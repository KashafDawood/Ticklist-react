import { BottomNavbar } from "../../components/Navbar";
import Tasks from "./../Tasks/";

export default function Dashboard() {
  return (
    <div>
      <Tasks />
      <BottomNavbar />
    </div>
  );
}
