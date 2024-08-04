import React, { useState } from "react";
import "../styles/get.css";
import EditStudentForm from "./editStudent";
import axios from "axios";

const StudentList = () => {
  const [studentData, setStudentData] = useState([]);
  const [error, setError] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/student");
      setStudentData(response.data);
      setError("");
    } catch (error) {
      setError("Error fetching student data. Please try again.");
    }
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/student/${id}`);
      setStudentData(studentData.filter((student) => student._id !== id));
    } catch (error) {
      setError("Error deleting student. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quia.
          Nesciunt eaque minus aspernatur nam, distinctio animi dolor molestias
          ea mollitia! Non delectus, possimus animi odio obcaecati reprehenderit
          aspernatur eos. Itaque earum vero velit quasi sunt, labore aut
          repellat, illo dolores, minima quisquam! Veniam quidem pariatur <br />
          impedit at. Deleniti maiores culpa at dolor dolore earum aut quibusdam
          sapiente repudiandae ut. Molestiae corporis voluptatum saepe eveniet
          ducimus, ab sapiente expedita eaque sit nobis, asperiores, atque amet
          quisquam quaerat officiis esse dolorem. Omnis ipsam tenetur excepturi
          repudiandae assumenda eius repellat asperiores quo. Veniam cum dolores
          <br />
          rerum doloremque iusto vitae enim omnis nam vel repellendus eius,
          tempora velit facilis quo ad sapiente iste. Molestias assumenda
          quaerat illum modi excepturi officia dolorem. Vero, aliquam! Omnis
          officiis obcaecati, veritatis vero dolor unde ullam nemo. Eius fuga
          commodi repellendus, id, molestias corrupti repellat minus non, <br />
          aspernatur modi blanditiis vero corporis error qui voluptatum vel
          pariatur tempora? Et placeat dicta pariatur ad suscipit a numquam
          maxime facere aliquid voluptatum explicabo, nam voluptatibus nisi esse
          optio adipisci sapiente! Amet sint laudantium harum delectus, quas
          nesciunt ut placeat iste! Magni, aut atque quisquam maxime vitae
          voluptate nihil assumenda consectetur hic possimus eveniet ea <br />
          expedita, ipsam reiciendis enim nulla! Id officia at tenetur magnam
          exercitationem facilis mollitia quas laboriosam facere. Fuga vitae
          officiis perferendis voluptate sed porro amet impedit sunt, a dicta
          commodi velit non excepturi. Tempore, provident? Corporis minima enim,
          sapiente odio impedit dolore? Blanditiis architecto tempore placeat
          nulla. Vitae eos doloremque ducimus eaque quae? Assumenda, voluptatum
          <br />
          aperiam in atque consequatur quas perspiciatis corporis vel placeat
          illum, facere sunt ipsam expedita natus repellendus. Cupiditate
          repellendus neque pariatur commodi at? Facere ut ab saepe
          exercitationem beatae necessitatibus quasi. Numquam explicabo quas
          fugiat illum facilis itaque, accusantium vel animi hic omnis sunt
          nobis magnam facere nisi quia quasi temporibus dolor repellat! <br />
        </p>
      </div>
      <button
        onClick={fetchStudents}
        className="btn btn-primary col-4 offset-4 mb-3"
      >
        All Students
      </button>
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
                <td>
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
        />
      )}
    </div>
  );
};

export default StudentList;
