import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import Analytics from "./pages/Analytics";  // Import the Analytics page
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useDarkMode } from "./context/DarkModeContext";
import BottomSidebar from "./components/BottomNavBar";
import './App.css';
import SettingsPage from "./pages/SettingsPage";
import Logout from "./pages/LogOut";

const App = () => {
  const { darkMode } = useDarkMode();

  return (
    <Router>
      <div className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"}`}>
        {/* Sidebar for large screens */}
        <Sidebar className="hidden lg:block" />

        <div className="flex-1 flex flex-col ml-0 lg:ml-1/6">
          {/* Header Component */}
          <Header />

          <div className={`flex pt-6 pb-14 px-1 sm:px-4 lg:px-28 ${darkMode && "bg-gray-800"} w-full justify-center lg:justify-end`}>
            {/* Routing logic */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/role-management" element={<RoleManagement />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<SettingsPage />} /> 
              <Route path="/logout" element={<Logout />} /> 
            </Routes>
          </div>
        </div>

        {/* Bottom Sidebar for small screens */}
        <BottomSidebar className="block lg:hidden" />
      </div>
    </Router>
  );
};

export default App;
