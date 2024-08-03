import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="sticky sticky-top nav"
        style={{ position: "fixed", top: "0px" }}
      >
        <a href="/" className="site-name">
          SiteName
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
