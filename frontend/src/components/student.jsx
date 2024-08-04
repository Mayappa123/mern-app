import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./getStudents";
import EditStudentForm from "./editStudent";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/student/")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  const handleEdit = (id) => {
    setEditingStudentId(id);
  };

  const handleUpdate = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      )
    );
    setEditingStudentId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/student/${id}`);
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id)
      );
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <StudentList
        students={students}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {editingStudentId && (
        <EditStudentForm studentId={editingStudentId} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default Student;
