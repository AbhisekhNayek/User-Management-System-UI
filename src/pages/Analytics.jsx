import React from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { useDarkMode } from "../context/DarkModeContext"; // Assuming dark mode context is used

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

function Analytics() {
  const { darkMode } = useDarkMode();

  // User Role Distribution (Pie Chart)
  const pieDataRole = {
    labels: ["Admin", "User", "Manager"],
    datasets: [
      {
        data: [20, 40, 10], // Number of users in each role
        backgroundColor: ["#FF5733", "#33A8FF", "#FFEB33"],
        hoverBackgroundColor: ["#FF6F61", "#49A9FF", "#FFDB4D"],
      },
    ],
  };

  // User Status Distribution (Pie Chart)
  const pieDataStatus = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [50, 10], // Number of active/inactive users
        backgroundColor: ["#28A745", "#FF4D4D"],
        hoverBackgroundColor: ["#5EBE8C", "#FF6666"],
      },
    ],
  };

  // User Growth Over Time (Line Chart)
  const areaDataGrowth = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "New Users",
        data: [10, 15, 25, 30, 45, 55, 70], // New users added each month
        fill: true,
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // User Activity (Line Chart)
  const areaDataActivity = {
    labels: ["January 1", "January 2", "January 3", "January 4", "January 5"],
    datasets: [
      {
        label: "User Logins",
        data: [100, 150, 200, 180, 210], // Number of logins each day
        fill: true,
        backgroundColor: "rgba(255, 193, 7, 0.2)",
        borderColor: "rgba(255, 193, 7, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Permission Usage (Bar Chart)
  const barDataPermissions = {
    labels: ["Can Create User", "Can Edit User", "Can View Reports"],
    datasets: [
      {
        label: "Permission Usage",
        data: [50, 30, 20], // Number of times each permission was used
        backgroundColor: ["#FF5733", "#33A8FF", "#FFEB33"],
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "#fff" : "#333",
        },
      },
      y: {
        ticks: {
          color: darkMode ? "#fff" : "#333",
        },
      },
    },
  };

  return (
    <div
      className={`h-screen flex pt-16 pb-8 px-6 overflow-auto justify-center w-full lg:w-5/6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className={`flex justify-between items-center px-6 py-4 shadow-md rounded-lg mb-8 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
            }`}
        >
          <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        </header>

        {/* Main Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          {/* Charts Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Pie Chart 1 - User Role Distribution */}
            <div
              className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                }`}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">Role Distribution</h3>
              <div className="h-64">
                <Pie data={pieDataRole} options={chartOptions} />
              </div>
            </div>
            {/* Line Chart 1 - User Growth */}
            <div
              className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                }`}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">User Growth Over Time</h3>
              <div className="h-64">
                <Line data={areaDataGrowth} options={chartOptions} />
              </div>
            </div>
            {/* Bar Chart - Permission Usage */}
            <div
              className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                }`}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">Permission Usage</h3>
              <div className="h-64">
                <Bar data={barDataPermissions} options={chartOptions} />
              </div>
            </div>




            {/* Pie Chart 2 - User Status Distribution */}
            <div
              className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
                }`}
            >
              <h3 className="text-lg font-semibold mb-4 text-center">User Status</h3>
              <div className="h-64">
                <Pie data={pieDataStatus} options={chartOptions} />
              </div>
            </div>


          </div>
        </main>
      </div>
    </div>
  );
}

export default Analytics;
