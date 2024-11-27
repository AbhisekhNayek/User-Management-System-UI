import React, { useState } from "react";
import { FaUserPlus, FaRegTimesCircle } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

function Modal({ closeModal }) {
  const dispatch = useDispatch();
  const { darkMode } = useDarkMode();

  const [formData, setFormData] = useState({
    name: "",
    role: "user",
    status: "active",
    permissions: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  // Shared input styles
  const inputStyles = `w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2`;
  const darkModeStyles = darkMode
    ? "bg-gray-700 text-gray-200 border-gray-600 focus:ring-teal-400"
    : "bg-white text-gray-800 border-gray-300 focus:ring-teal-500";
  const errorStyles = "border-red-500 focus:ring-red-500";

  // Update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false })); // Clear errors as user types
  };

  // Validate form and save user
  const handleSave = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) newErrors[field] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newUser = {
      ...formData,
      id: Date.now(),
      created: new Date().toLocaleDateString(),
    };

    dispatch(addUser(newUser)); // Dispatch action to save user
    closeModal(); // Close modal
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[10000] transition-opacity duration-300 opacity-100 ${darkMode ? "bg-gray-800 bg-opacity-75" : "bg-gray-600 bg-opacity-50"}`}
    >
      <div
        className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-96 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-xl">Add User</h3>
          <button onClick={closeModal}>
            <FaRegTimesCircle className="text-xl text-gray-600 hover:text-gray-800" />
          </button>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputStyles} ${darkModeStyles} ${errors.name ? errorStyles : ""}`}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className={`${inputStyles} ${darkModeStyles} ${errors.role ? errorStyles : ""}`}
          />
          <input
            type="text"
            name="permissions"
            placeholder="Permissions"
            value={formData.permissions}
            onChange={handleChange}
            className={`${inputStyles} ${darkModeStyles} ${errors.permissions ? errorStyles : ""}`}
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            className={`${inputStyles} ${darkModeStyles} ${errors.date ? errorStyles : ""}`}
          />
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleSave}
              className="py-2 px-6 bg-teal-500 hover:bg-teal-700 text-white rounded-lg shadow-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
