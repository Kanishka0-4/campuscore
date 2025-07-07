import React from "react";
import './RoleToggle.css';

function RoleToggle({ role, setRole }) {
  return (
    <div className="role-toggle">
      <button
        type="button"
        onClick={() => setRole("Student")}
        className={role === "Student" ? "active" : ""}
      >
        Student
      </button>
      <button
        type="button"
        onClick={() => setRole("Faculty")}
        className={role === "Faculty" ? "active" : ""}
      >
        Faculty
      </button>
    </div>
  );
}

export default RoleToggle; 