// src/pages/HomePage.jsx
import React from "react";
import StudentForm from "../components/newStudent.jsx";
import StudentList from "../components/getStudents.jsx";

const HomePage = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the homepage!</p>
      <StudentForm />
      <StudentList />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        doloremque consequatur nisi rerum voluptatibus necessitatibus ratione
        iusto tempore ipsum omnis est provident, ut nobis nostrum exercitationem
        dignissimos. Dolorem, nihil vel.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        doloremque consequatur nisi rerum voluptatibus necessitatibus ratione
        iusto tempore ipsum omnis est provident, ut nobis nostrum exercitationem
        dignissimos. Dolorem, nihil vel.
      </p>
    </div>
  );
};

export default HomePage;
