// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  // const createStudent = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/api/student/new", form);
  //     setForm({ name: "", email: "", address: "", mobile: "" });
  //     fetchStudents();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/student/${id}`);
      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Student Management</h1>
      <form onSubmit={createStudent}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          required
        />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.email} - {student.address} -{" "}
            {student.mobile}
            <button onClick={() => deleteStudent(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
