import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { FaBell } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import { useSelector } from "react-redux";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement
);

const Dashboard = () => {
  const { users } = useSelector((state) => state.users); // Access user data from Redux store
  const { darkMode } = useDarkMode(); // Use Dark Mode context

  // Line chart data for Sales and Revenue
  const areaChartData = {
    labels: ["January", "February", "March", "April", "May"], // Data points (months)
    datasets: [
      {
        label: "Sales",
        data: [65, 75, 60, 90, 100], // Sales data over time
        fill: true,
        borderColor: "#f9a825",
        backgroundColor: "rgba(249, 168, 37, 0.2)",
        tension: 0.4,
      },
      {
        label: "Revenue",
        data: [45, 60, 80, 85, 95], // Revenue data over time
        fill: true,
        borderColor: "#7b1fa2",
        backgroundColor: "rgba(123, 31, 162, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Pie chart data for user activity (Active, Inactive, Pending)
  const pieChartData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        data: [45, 35, 20], // Percentage of users in each state
        backgroundColor: ["#4caf50", "#ff9800", "#2196f3"], // Different colors for each state
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div
      className={`h-screen flex pt-16 overflow-auto justify-end w-full lg:w-5/6 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with title and notification */}
        <header
          className={`flex justify-between items-center px-6 py-4 shadow-md rounded-lg mb-8 ${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
          }`}
        >
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="relative">
            <FaBell className="text-lg" />
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              3 {/* Notification count */}
            </span>
          </button>
        </header>

        {/* Main Content Section */}
        <main className="p-6 flex-1 overflow-y-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Individual Stat Cards with different metrics */}
            <div className="p-6 rounded-lg shadow-md bg-blue-600 text-white">
              <h3 className="text-lg font-semibold mb-4">Users</h3>
              <p className="text-3xl font-bold">{users.length}</p> {/* Displaying dynamic user count */}
              <p className="text-sm">See all users</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-green-600 text-white">
              <h3 className="text-lg font-semibold mb-4">Orders</h3>
              <p className="text-3xl font-bold">34</p>
              <p className="text-sm">See all orders</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-indigo-500 text-white">
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <p className="text-3xl font-bold">$107</p>
              <p className="text-sm">See all products</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-red-500 text-white">
              <h3 className="text-lg font-semibold mb-4">Balance</h3>
              <p className="text-3xl font-bold">$444</p>
              <p className="text-sm">See all details</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Line Chart - Sales and Revenue */}
            <div
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">Revenue</h3>
              <div className="h-64">
                <Line
                  data={areaChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Pie Chart - User Activity */}
            <div
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">User Activity</h3>
              <div className="max-h-100 aspect-w-2 aspect-h-2">
                <Pie
                  data={pieChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
