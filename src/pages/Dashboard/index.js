import { BottomNavbar } from "../../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Content />
      <BottomNavbar />
    </div>
  );
}

const Content = () => {
  return (
    <div className="dashboard-content">
      <h1 className="content-title">Dashboard</h1>
    </div>
  );
};
