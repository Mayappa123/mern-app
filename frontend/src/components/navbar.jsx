import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky sticky-top nav">
        <a href="/" className="sitename">
          MyApp
        </a>
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="active">
            <Link to="/about">About</Link>
          </li>
          <li className="active">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="active">
            <Link to="/newStudent">new Student</Link>
          </li>
          <li className="active">
            <Link to="/allStudents">All Student</Link>
          </li>
          <li className="active">
            <Link to="/newcomponent">NewComponent</Link>
          </li>
          <li className="active">
            <Link to="/signup">Signup </Link>
          </li>
          <li className="active">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
