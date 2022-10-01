import React from "react";
import Navbar from "./components/NavBar";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import JobBoard from "./pages/JobBoard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job-board" element={<JobBoard />} />
      </Routes>
    </div>
  );
}

export default App;
