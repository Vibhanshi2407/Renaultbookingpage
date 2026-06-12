import { NavLink } from "react-router-dom";
import "./sidebar.css";
import {over}from "../../assets/Images/elements.png";
// import {deal} from ".././src/assets/Images/total.png";
import {deal} from "../../assets/Images/total.png"

const navItems = [
  {
    icon: (
      <img
        src={over}
        alt="Overview"
        width={20}
        height={20}
      />
    ),
    label: "Overview",
    path: "/dashboard",
  },
  {
    icon: (
      <img
        src={deal}
        alt="Manage Dealers"
        width={20}
        height={20}
      />
    ),
    label: "Manage Dealers",
    path: "/dealers",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <NavLink to="/dashboard">
          <img
            src="src/assets/Images/rlogo.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </NavLink>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "sidebar-link--active" : ""}`
            }
          >
            <span className="sidebar-link-icon">
              {item.icon}
            </span>
            <span className="sidebar-link-label">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
