import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/login.css";

const Login = () => {
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
    try {
      const response = await axios.post(
        "http://localhost:5000/api/student/login",
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
        className="row col-6 offset-3 mt-3 mb-3 loginform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="col-6 offset-3 heading">LOGIN</h2>

        <div className="form-group col-6 offset-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            className="form-control"
            {...register("Username", {
              required: { value: true, message: "username is required." },
            })}
          />
          {errors.Username && (
            <span className="error">{errors.Username.message}</span>
          )}
        </div>
        <div className="form-group col-6 offset-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            id="password"
            placeholder="Enter Password"
            className="form-control"
            type="password"
            {...register("Password", {
              required: { value: true, message: "password is required." },
              minLength: { value: 5, message: "min-length is 5" },
              maxLength: { value: 12, message: "max-length is 12" },
            })}
          />
          {errors.Password && (
            <span className="error">{errors.Password.message}</span>
          )}
        </div>
        <input
          className="btn btn-primary btn-sm col-2 offset-5 mb-3"
          type="submit"
          value="Login"
          disabled={isSubmitting}
        />
        {isSubmitting && <div className="loading">Loading...</div>}
      </form>
    </>
  );
};

export default Login;
