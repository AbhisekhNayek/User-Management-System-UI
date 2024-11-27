import React, { useState } from "react";
import { FaUserEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import Modal from "../components/UserModal";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUserStatus } from '../slices/userSlice';
import { useDarkMode } from "../context/DarkModeContext";

function UserManagement() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { darkMode } = useDarkMode();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleStatusChange = (id, status) => {
    dispatch(updateUserStatus({ id, status }));
  };

  // Metrics (these would likely be dynamic in a real app)
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = users.filter((user) => user.status === "Inactive").length;

  return (
    <div className={`${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-800"} h-screen flex pt-16 overflow-auto justify-end w-full md:w-5/6`}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          className={`flex justify-between items-center px-6 py-4 shadow-md rounded-lg mb-8 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
            }`}
        >
          <h1 className="text-lg lg:text-xl font-semibold">User Management</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-teal-600 text-gray-100 px-6 py-2 flex rounded-lg text-sm shadow-md hover:bg-teal-700 transition"
            >
              <FaUserPlus className="inline mr-2 text-lg" />
              <span className="hidden lg:block">Add</span>
            </button>
          </div>
        </header>

        <main className="px-3 md:px-6 py-6 flex-1 overflow-y-auto">
          {/* Top Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Total Users */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-black-100">Total Users</h3>
                  <p className="text-3xl font-bold">{totalUsers}</p>
                </div>
                <div className="flex items-center text-green-500">
                  <span>+30%</span>
                </div>
              </div>
            </div>
            {/* Active Users */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-black-100">Active Users</h3>
                  <p className="text-3xl font-bold">{activeUsers}</p>
                </div>
                <div className="flex items-center text-green-500">
                  <span>+27%</span>
                </div>
              </div>
            </div>
            {/* Inactive Users */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-black-100">Inactive Users</h3>
                  <p className="text-3xl font-bold">{inactiveUsers}</p>
                </div>
                <div className="flex items-center text-red-500">
                  <span>-10%</span>
                </div>
              </div>
            </div>
            {/* Total Projects */}
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-black-100">Total Projects</h3>
                  <p className="text-3xl font-bold">670</p>
                </div>
                <div className="flex items-center text-blue-500">
                  <span>+27%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Table Section */}
          <div className={`shadow-sm rounded-lg overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <table className="w-full table-auto text-xs sm:text-sm md:text-sm">
              <thead className={`${darkMode ? "bg-gray-700 text-gray-200" : "bg-indigo-100 text-gray-700"}`}>
                <tr>
                  <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-sm sm:font-sm border-b-4">Name</th>
                  <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-sm sm:font-sm border-b-4">Date</th>
                  <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-sm sm:font-sm border-b-4">Permissions</th>
                  <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-sm sm:font-sm border-b-4">Status</th>
                  <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-sm sm:font-sm border-b-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-sm sm:text-base font-semibold text-gray-500">
                      No Users Available
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className={`transition duration-200 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                      <td className="px-2 sm:px-6 py-4">{user.name}</td>
                      <td className="px-2 sm:px-6 py-4">{user.date}</td>
                      <td className="px-2 sm:px-6 py-4">{user.permissions}</td>
                      <td className="px-2 sm:px-6 py-4">
                        <button
                          onClick={() => handleStatusChange(user.id, user.status === "Active" ? "Inactive" : "Active")}
                          className={`text-sm px-3 py-1 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"} text-white`}
                        >
                          {user.status}
                        </button>
                      </td>
                      <td className="px-2 sm:px-6 py-4">
                        <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-800 transition">
                          <FaTrashAlt />
                        </button>
                        <button className="ml-2 text-blue-600 hover:text-blue-800 transition">
                          <FaUserEdit />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </main>
      </div>
    </div>
  );
}

export default UserManagement;
