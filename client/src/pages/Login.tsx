import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

const Login = () => {
  const [token, setToken] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLoginClicked = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    });
    const { token } = response.data;
    setToken(token);
    navigate("/");
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="./src/assets/images/login-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl font-bold">Campus Connect</h1>

            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" method="POST">
              <div>
                {error && <div className="fail">{error}</div>}
                <label className="block text-gray-700">Email Address</label>
                <input
                  autoComplete="current-password"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <button
                onClick={(event) => onLoginClicked(event)}
                type="submit"
                disabled={!email || !password}
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              {`Need an account? `}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </button>
            </p>

            <p className="text-sm text-gray-500 mt-12">
              &copy; {new Date().getFullYear()} Russell Nizamov - All Rights
              Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
