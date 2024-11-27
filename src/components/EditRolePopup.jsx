import React, { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import { useDispatch } from "react-redux";
import { editRole } from "../slices/rolesSlice";

const InputField = ({ label, type, value, onChange, darkMode }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border rounded-lg ${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-800"}`}
    />
  </div>
);

function EditRolePopup({ role, closeModal }) {
  const dispatch = useDispatch();
  const { darkMode } = useDarkMode();
  const [updatedRole, setUpdatedRole] = useState(role.role);
  const [updatedPermissions, setUpdatedPermissions] = useState(role.permissions);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!updatedRole || !updatedPermissions) {
      setError("All fields are required!");
      return;
    }

    const permissionsArray = updatedPermissions.split(",").map((p) => p.trim());
    if (permissionsArray.length === 0) {
      setError("Permissions must not be empty!");
      return;
    }

    dispatch(
      editRole({
        id: role.id,
        updatedRole: {
          role: updatedRole,
          permissions: permissionsArray,
        },
      })
    );
    closeModal();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[10000] transition-opacity duration-300 opacity-100 ${
        darkMode ? "bg-gray-900 bg-opacity-70" : "bg-gray-900 bg-opacity-50"
      }`}
    >
      <div
        className={`rounded-lg shadow-lg max-w-lg w-full p-8 ${
          darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Edit Role</h3>
          <button
            onClick={closeModal}
            className={`transition duration-200 ${
              darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800"
            }`}
            aria-label="Close modal"
          >
            <FaRegTimesCircle size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField
            label="Role Name"
            type="text"
            value={updatedRole}
            onChange={(e) => setUpdatedRole(e.target.value)}
            darkMode={darkMode}
          />
          <InputField
            label="Permissions (comma-separated)"
            type="text"
            value={updatedPermissions}
            onChange={(e) => setUpdatedPermissions(e.target.value)}
            darkMode={darkMode}
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className={`px-6 py-2 rounded-lg ${
                darkMode ? "bg-gray-600 text-gray-200 hover:bg-gray-500" : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSave}
              className={`px-6 py-2 rounded-lg flex items-center transition duration-200 ${
                darkMode
                  ? "bg-teal-500 text-gray-100 hover:bg-teal-400"
                  : "bg-teal-600 text-gray-100 hover:bg-teal-700"
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRolePopup;
