import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function Logout() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      className={`h-screen flex pt-16 overflow-auto justify-center items-center w-full lg:w-5/6 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          className={`flex justify-between items-center px-6 py-4 shadow-md rounded-lg mb-8 ${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
          }`}
        >
          <h1 className="text-2xl font-semibold">Logout</h1>
        </header>

        <main className="p-6 flex-1 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4">Are you sure you want to log out?</h2>
          <button
            onClick={handleLogout}
            className={`px-6 py-3 rounded-lg text-white font-semibold ${
              darkMode ? "bg-red-500 hover:bg-red-600" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Logout
          </button>
        </main>
      </div>
    </div>
  );
}

export default Logout;
