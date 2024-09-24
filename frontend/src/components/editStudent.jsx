import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/editForm.css";
import { EditToast } from "./ShowToast";

const EditStudentForm = ({ student, onClose, onUpdate }) => {
  const [name, setName] = useState(student.name || "");
  const [email, setEmail] = useState(student.email || "");
  const [address, setAddress] = useState(student.address || "");
  const [mobile, setMobile] = useState(student.mobile || "");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setEmail(student.email);
      setAddress(student.address);
      setMobile(student.mobile);
    }
  }, [student]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/api/student/update/${student._id}`,
        {
          name,
          email,
          address,
          mobile,
        }
      );

      EditToast();
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-student-form">
      <h1>Edit Form</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="btn-group">
        <button type="submit" className="update">
          Update & Save
        </button>
        <button type="button" className="cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditStudentForm;
