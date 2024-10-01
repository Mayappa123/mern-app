// components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/blog">Blog</a>
        <a href="/faq">FAQ</a>
        <a href="/support">Support</a>
        <a href="/careers">Careers</a>
        <a href="/press">Press</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className="footer-credit">
        &copy; 2024 MyWebsite. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
