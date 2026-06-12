import "./topbar.css";
export default function TopBar({ dateRange = "Last 30 Days", onDownload }) {
  const today = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="topbar">
      <div className="topbar-left">
        <input type="text" placeholder="Search..." className="topbar-search-input" />
        <img
         src=".././src/assets/Images/search (2).png"
          alt="Search" 
          className="topbar-search-icon" 
          />
      </div>
     
      <div className="topbar-right">
        <span className="topbar-date">{today}</span>
        <img src="/src/assets/Images/notifi.png" alt="Notifications" className="topbar-icon" />
        <img src="/src/assets/Images/Oval.png" alt="Profile" className="topbar-icon" />
      </div>
     
    </header>
  );
}