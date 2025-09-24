import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

/**
 * allowed: array of allowed role strings e.g. ["Admin"]
 */
export default function RequireRole({ allowed = [], children }) {
  const { role } = useAuth();
  if (!role) return <Navigate to="/login" replace />;

  if (!allowed.includes(role)) {
    return <Navigate to="/access-denied" replace />;
  }
  return children;
}
