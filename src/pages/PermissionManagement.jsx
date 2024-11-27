import React from "react";

function PermissionManagement() {
  const permissions = ["Read", "Write", "Delete"];

  return (
    <div className="section">
      <h2>Permission Management</h2>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>{permission}</li>
        ))}
      </ul>
    </div>
  );
}

export default PermissionManagement;
