import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";
import MobileNav from "../MoblieNav/MobileNav";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import MobileHeader from "../MobileHeader/MobileHeader";
import Overlay from "../Overlay/Overlay";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .get(`https://e-commerce-3kdo.onrender.com/api/users/${formData.email}`)
        .then((data) => {
          if (data.data.length) {
            errors.email = "this Email Already sign in";
            setErrors({
              email: errors.email,
            });
            console.log(errors.email);
          } else {
            axios
              .post(
                "https://e-commerce-3kdo.onrender.com/api/users/register",
                formData
              )
              .then((res) => {
                window.location.pathname = "/login";
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => console.log(error));

      // Submit the form data to the server
      console.log(formData);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.userName.trim()) {
      errors.userName = "User Name is required";
    } else if (data.userName.trim().length < 4) {
      errors.userName = "User Name must be at least 4 chars";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is required";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <section className="register">
      <MobileNav />
      <MobileSideBar />
      <MobileHeader />
      <Overlay />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-24">
        <div class="my-10 px-8 py-6 mx-4 text-left bg-white shadow-lg md:w-2/5 lg:w-1/3 sm:w-2/3">
          <h3 class="text-2xl font-bold text-center">Join us</h3>
          <form onSubmit={handleSubmit} action="get">
            <div class="mt-4">
              <div>
                <label className="block" htmlFor="userName">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  placeholder="User Name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {errors.userName && (
                  <div className="error">*{errors.userName}</div>
                )}
              </div>

              <div class="mt-4">
                <label class="block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {errors.email && <div className="error">*{errors.email}</div>}
              </div>
              <div class="mt-4">
                <label class="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {errors.password && (
                  <div className="error">*{errors.password}</div>
                )}
              </div>
              <div class="mt-4">
                <label class="block" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {errors.confirmPassword && (
                  <div className="error">*{errors.confirmPassword}</div>
                )}
              </div>
              <div class="flex">
                <button
                  class="w-full px-6 py-2 mt-4 text-white bg-main hover:bg-main-hover rounded-lg hover:bg-blue-900 font-bold"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
              <div class="mt-6 text-grey-dark">
                Already have an account?
                <a
                  class="text-blue-600 hover:underline hover:text-main"
                  href="/login"
                >
                  Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

{
  /* <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <div className="error">{errors.firstName}</div>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <div className="error">{errors.lastName}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </div>
      <button type="submit">Register</button>
    </form> */
}
