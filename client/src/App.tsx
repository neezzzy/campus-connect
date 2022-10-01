import React from "react";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import JobBoard from "./pages/JobBoard";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import ProtectedRoute, { ProtectedRouteProps } from "./auth/ProtectedRoute";

function App() {
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath: "/login",
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<JobBoard />}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<Profile />}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
