// src/components/StudentList.jsx
import React, { useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/student");
      setStudents(response.data);
      setError("");
    } catch (error) {
      setError("Error fetching student data. Please try again.");
    }
  };


const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/api/student/${id}`);
    setStudents(students.filter((student) => student._id !== id));
  } catch (error) {
    setError("Error deleting student. Please try again.");
  }
};


  return (
    <div>
      <button
        onClick={fetchStudents}
        className="btn btn-primary col-4 offset-4 mb-3"
      >
        See All Students
      </button>
      {error && <p className="text-danger">{error}</p>}
      {students.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    style={{ backgroundColor: "green", margin: "5px" }}
                    onClick={() => handleEdit(student._id)}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleDelete(student._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
