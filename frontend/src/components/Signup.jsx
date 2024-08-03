import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/login.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(3);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/student/signup",
        data
      );
      console.log(response.data);
    } catch (err) {
      console.log(`Error ---> ${err}`);
    }
  };

  return (
    <>
      <form
        className="row col-6 mt-3 mb-3 offset-3"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="col-6 offset-3 heading">SIGNUP</h2>

        <div className="form-group col-6 offset-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="Enter username"
            {...register("username", {
              required: { value: true, message: "Username is required." },
            })}
          />
          {errors.username && (
            <span className="red">{errors.username.message}</span>
          )}
        </div>
        <div className="form-group col-6 offset-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", {
              required: { value: true, message: "Email is required." },
            })}
          />
          {errors.email && <span className="red">{errors.email.message}</span>}
        </div>
        <div className="form-group col-6 offset-3">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Enter Password"
            className="form-control"
            type="password"
            {...register("password", {
              required: { value: true, message: "Password is required." },
              minLength: { value: 5, message: "Minimum length is 5." },
              maxLength: { value: 12, message: "Maximum length is 12." },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <input
          className="btn btn-primary btn-sm col-2 offset-5 mb-3"
          type="submit"
          value="Signup"
          disabled={isSubmitting}
        />
        {isSubmitting && <div className="loading">Loading...</div>}
      </form>
    </>
  );
};

export default Signup;
