import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserShield,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const Sidebar = ({ className }) => {
  const { darkMode } = useDarkMode();
  const location = useLocation();

  // Shared Styles
  const baseLinkStyles = `flex items-center py-3 px-4 rounded-lg transition duration-200`;
  const hoverStyles = darkMode
    ? "hover:bg-teal-500 hover:text-gray-200"
    : "hover:bg-teal-500 hover:text-gray-100";
  const activeStyles = darkMode
    ? "bg-teal-600 text-gray-200"
    : "bg-teal-600 text-gray-100";

  // Links Data
  const links = [
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/user-management", label: "Manage Users", icon: <FaUsers /> },
    { path: "/role-management", label: "Manage Roles", icon: <FaUserShield /> },
    { path: "/analytics", label: "Analytics", icon: <FaChartBar /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
    { path: "/logout", label: "Logout", icon: <FaSignOutAlt />, hover: "hover:bg-red-600" },
  ];

  return (
    <nav
      className={`${
        darkMode
          ? "bg-gray-800 text-gray-300 border-gray-600"
          : "bg-gray-100 text-gray-700 border-gray-200"
      } w-full lg:w-1/6 p-5 h-screen fixed top-5 lg:left-16 left-0 z-10 shadow-xl pt-[7%] border-r-[1px] transition-colors duration-300 ${className}`}
    >
      <ul className="space-y-6">
        {links.map(({ path, label, icon, hover }) => (
          <li key={path}>
            <Link
              to={path}
              aria-label={label}
              className={`${baseLinkStyles} ${
                location.pathname === path ? activeStyles : hover || hoverStyles
              }`}
            >
              <span className="mr-3 text-lg">{icon}</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
