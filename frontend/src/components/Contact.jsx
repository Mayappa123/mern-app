//Contact.jsx

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "../styles/contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(3);
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/student/contact",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-container mb-3">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            {...register("Email", {
              required: { value: true, message: "email is required" },
            })}
            placeholder="Enter Email"
          />
          {errors.Email && <span className="red">{errors.Email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            className="form-control"
            id="subject"
            {...register("Subject", {
              required: { value: true, message: "subject is required" },
            })}
            placeholder="Enter Subject"
          />
          {errors.Subject && (
            <span className="red">{errors.Subject.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            {...register("Message", {
              required: { value: true, message: "message is required" },
            })}
            placeholder="Share your thought..."
          ></textarea>
          {errors.Message && (
            <span className="red">{errors.Message.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary form-control"
          disabled={isSubmitting}
        >
          Send Message
        </button>
        {isSubmitting && <span className="loading">Loading...</span>}
      </form>
    </div>
  );
};
export default Contact;
