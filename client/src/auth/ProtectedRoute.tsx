import React from "react";
import { Navigate, useLocation } from "react-router";
import { useUser } from "./UseUser";

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return outlet;
}
