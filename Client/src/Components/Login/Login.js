import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        .post(`https://e-commerce-3kdo.onrender.com/api/users/login`, formData)
        .then((data) => {
          const user = {
            userName: data.data.user[0].userName,
            email: data.data.user[0].email,
            token: data.data.user[0].token,
          };
          localStorage.setItem("user", JSON.stringify(user));

          window.location.pathname = "/";
        })
        .catch((error) => {
          errors.email = error.response.data;
          errors.password = error.response.data;
          setErrors({
            email: errors.email,
            password: errors.password,
          });
        });
    }
  };

  const validate = (data) => {
    const errors = {};

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

    return errors;
  };

  return (
    <section className="login">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="my-10 px-8 py-6 mx-4 text-left bg-white shadow-lg md:w-2/5 lg:w-1/3 sm:w-3/4 w-4/5">
          <h3 class="text-2xl font-bold text-center">Sign Up</h3>
          <form onSubmit={handleSubmit} action="get">
            <div class="mt-4">
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

              <div class="flex">
                <button
                  class="w-full px-6 py-2 mt-4 text-white bg-main hover:bg-main-hover rounded-lg hover:bg-blue-900 font-bold"
                  type="submit"
                >
                  Log in
                </button>
              </div>
              <div class="mt-6 text-grey-dark">
                don't have Acount?
                <a
                  class="text-blue-600 hover:underline hover:text-main"
                  href="/register"
                >
                  Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
