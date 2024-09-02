import React, { useState } from "react";
import "../styles/get.css";
import EditStudentForm from "./editStudent";
import axios from "axios";
import Swal from "sweetalert2";

const StudentList = () => {
  const [studentData, setStudentData] = useState("");
  const [error, setError] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/student");
      setStudentData(response.data);
      setError("");
    } catch (error) {
      setError("Please try again.");
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const showToast = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Data deleted successfully",
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/student/delete/${id}`);
      setStudentData(studentData.filter((student) => student._id !== id));
      showToast();
    } catch (error) {
      setError("Error deleting student. Please try again.");
    }
  };

  return (
    <div>
      <div className="allBtn">
        <button onClick={fetchStudents} className="btn btn-primary">
          All Students
        </button>
      </div>

      {error && <p className="text-danger">{error}</p>}
      {studentData.length > 0 && (
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
            {studentData.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.mobile}</td>
                <td className="bttn">
                  <button onClick={() => handleEdit(student)} className="edit">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student._id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedStudent && (
        <EditStudentForm
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          onUpdate={fetchStudents}
        />
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque totam
        delectus qui exercitationem voluptates, unde beatae dolore quia harum
        tempora nemo eveniet corrupti ipsam maiores ut. Cupiditate dolorum
        exercitationem voluptate.
      </p>
    </div>
  );
};

export default StudentList;
