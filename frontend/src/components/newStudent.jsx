import React, { useState } from "react";
import axios from "axios";
import "../styles/newStudent.css";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, address, mobile };
      console.log("Sending data:", data); 
      const response = await axios.post(
        "http://localhost:8080/api/student/new",
        data
      );
      console.log(response);
      setMessage("Student data saved successfully!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setName("");
      setEmail("");
      setAddress("");
      setMobile("");
    } catch (error) {
      console.error("Error:", error); 
      setMessage("Error saving student data. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="student-form-container mt-5 mb-5 ">
      <h2>Add Student Information</h2>
      <form onSubmit={handleSubmit} className="row col-12">
        <div className="form-group col-4 offset-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-4">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group form-group col-4 offset-2">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-4">
          <label className="form-label">Mobile</label>
          <input
            type="number"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary col-4 offset-4">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentForm;
