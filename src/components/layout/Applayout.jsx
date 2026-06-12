import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import "./AppLayout.css";

export default function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <TopBar />
        <div className="app-page">{children}</div>
      </div>
    </div>
  );
}