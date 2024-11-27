import React from "react";
import { FaUser, FaUsers, FaLock, FaBell, FaClipboardList, FaUserShield, FaDatabase, FaCogs, FaKey, FaThList, FaPlug } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext"; // Import the context hook

function Settings() {
  // Get the dark mode value and the function to toggle it
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`h-screen flex pt-16 pb-8 px-6 overflow-auto justify-center items-center w-full lg:w-5/6 ${darkMode ? "dark:bg-gray-800 dark:text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className={`flex justify-between items-center px-6 py-4 shadow-md rounded-lg mb-8 ${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
          }`}
        >
          <h1 className="text-2xl font-semibold">User Management Settings</h1>
        </header>

        {/* Main Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          {/* Settings Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* User Management Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-blue-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaUser className="text-4xl mb-4 text-blue-500" />
              <h2 className="text-xl font-medium">User Management</h2>
            </div>

            {/* Roles & Permissions Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-green-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaUsers className="text-4xl mb-4 text-green-500" />
              <h2 className="text-xl font-medium">Roles & Permissions</h2>
            </div>

            {/* Security Settings Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-orange-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaLock className="text-4xl mb-4 text-orange-500" />
              <h2 className="text-xl font-medium">Security Settings</h2>
            </div>

            {/* Notifications Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-purple-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaBell className="text-4xl mb-4 text-purple-500" />
              <h2 className="text-xl font-medium">Notifications</h2>
            </div>

            {/* Audit Logs Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-teal-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaClipboardList className="text-4xl mb-4 text-teal-500" />
              <h2 className="text-xl font-medium">Audit Logs</h2>
            </div>

            {/* Account Settings Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-red-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaUserShield className="text-4xl mb-4 text-red-500" />
              <h2 className="text-xl font-medium">Account Settings</h2>
            </div>

            {/* Privacy Settings Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-blue-200 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaDatabase className="text-4xl mb-4 text-blue-600" />
              <h2 className="text-xl font-medium">Privacy Settings</h2>
            </div>

            {/* Teams & Groups Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-yellow-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaCogs className="text-4xl mb-4 text-yellow-500" />
              <h2 className="text-xl font-medium">Teams & Groups</h2>
            </div>

            {/* Activity Tracking Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-gray-200 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaThList className="text-4xl mb-4 text-gray-700" />
              <h2 className="text-xl font-medium">Activity Tracking</h2>
            </div>

            {/* User Preferences Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-indigo-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaKey className="text-4xl mb-4 text-indigo-500" />
              <h2 className="text-xl font-medium">User Preferences</h2>
            </div>

            {/* API Access Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-pink-100 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaUser className="text-4xl mb-4 text-pink-500" />
              <h2 className="text-xl font-medium">API Access</h2>
            </div>

            {/* New Integration Settings Section */}
            <div className={`bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:bg-indigo-200 ${darkMode ? "dark:bg-gray-700 dark:text-white" : ""} hover:scale-105 hover:shadow-xl`}>
              <FaPlug className="text-4xl mb-4 text-indigo-600" />
              <h2 className="text-xl font-medium">Integration Settings</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
