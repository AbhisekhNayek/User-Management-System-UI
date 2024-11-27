import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-3 px-4 md:px-8 shadow-md text-gray-700 dark:text-gray-300 fixed top-0 left-0 right-0 lg:left-16 lg:right-16 z-20 border-b border-gray-200 dark:border-gray-600 transition-colors duration-300">
      <div className="flex justify-between items-center">
        {/* Header Title */}
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-100">
          UserHub - VRV
        </h1>

        <div className="flex items-center space-x-3 lg:space-x-6">
          {/* Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-transparent text-gray-700 dark:text-gray-300 hover:bg-teal-500 hover:text-gray-100 transition duration-200"
          >
            {darkMode ? (
              <BsFillSunFill className="text-xl text-yellow-300" />
            ) : (
              <BsFillMoonStarsFill className="text-xl" />
            )}
          </button>

          {/* Search Button */}
          <button
            aria-label="Search"
            className="py-2 px-4 rounded-md flex items-center space-x-2 text-gray-700 dark:text-gray-100 font-semibold hover:bg-teal-500 hover:text-gray-100 transition duration-200"
          >
            <AiOutlineSearch className="text-base lg:text-lg" />
            <span className="hidden lg:inline text-sm lg:text-base">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
