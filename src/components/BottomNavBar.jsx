import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaUserShield, FaSignOutAlt, FaChartBar, FaCog } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const NavLink = ({ to, icon: Icon, label, darkMode }) => {
  if (!to || !Icon || !label) return null;

  const linkClass = darkMode
    ? "hover:bg-gray-700 hover:text-white"
    : "hover:bg-gray-200 hover:text-gray-900";

  return (
    <Link
      to={to}
      className={`flex flex-col justify-center items-center py-2 px-3 sm:px-4 rounded-full ${linkClass} transition-all duration-300`}
      aria-label={label}
    >
      <Icon className="text-xl sm:text-2xl mb-1" />
      <span className="text-xs sm:text-sm">{label}</span>
    </Link>
  );
};

const BottomNavBar = ({ className = "" }) => {
  const { darkMode } = useDarkMode();

  const navClass = darkMode
    ? "bg-gray-900 text-gray-300 border-gray-700"
    : "bg-gray-100 text-gray-800 border-gray-300";

  const links = [
    { to: "/dashboard", icon: FaTachometerAlt, label: "Dashboard" },
    { to: "/user-management", icon: FaUsers, label: "Users" },
    { to: "/role-management", icon: FaUserShield, label: "Roles" },
    { to: "/analytics", icon: FaChartBar, label: "Analytics" },
    { to: "/settings", icon: FaCog, label: "Settings" },
    { to: "/logout", icon: FaSignOutAlt, label: "Logout" },
  ].filter(link => link.to && link.icon && link.label);

  if (!links.length) return null;

  return (
    <nav
      className={`${navClass} w-full py-2 px-3 fixed bottom-0 left-0 z-10 shadow-lg border-t transition-colors duration-300 ${className}`}
    >
      <ul className="flex justify-between sm:justify-around">
        {links.map((link, index) => (
          <li key={index} className="flex-1 text-center">
            <NavLink {...link} darkMode={darkMode} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavBar;
