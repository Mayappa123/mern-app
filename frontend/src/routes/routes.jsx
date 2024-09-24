import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import StudentForm from "../components/newStudent";
import StudentList from "../components/getStudents";
import App from "../App";
import NewComponent from "../components/NewComponent";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="newStudent" element={<StudentForm />} />
        <Route path="allStudents" element={<StudentList />} />
        <Route path="newcomponent" element={<NewComponent />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
