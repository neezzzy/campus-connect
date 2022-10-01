import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";

const Register = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useToken();
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onRegisterClicked = async () => {
    const response = await axios.post("http://localhost:8080/register", {
      email: email,
      password: password,
    });
    const { token } = response.data;
    setToken(token);
    navigate("/login");
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
              Register your account
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
                  id="email"
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
                  id="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">
                  Confirm Your Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  id="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <button
                onClick={onRegisterClicked}
                type="submit"
                disabled={!email || !password || password !== confirmedPassword}
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
              >
                Register
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              {`Already have an account? `}
              <button
                onClick={() => navigate("/login")}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login into your existing account
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

export default Register;
