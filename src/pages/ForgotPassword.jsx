import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        className="card shadow-lg p-4 text-center"
        style={{
          maxWidth: 400,
          width: "100%",
          borderRadius: "15px",
        }}
      >
        <div style={{ fontSize: 50, color: "#ffc107", marginBottom: 20 }}>
          <i className="bi bi-key"></i>
        </div>
        <h2 className="fw-bold mb-2">Forgot Password</h2>
        <p className="mb-4">
          This is a demo link. In production, implement email OTP or password
          reset link.
        </p>
        <Link
          to="/login"
          className="btn btn-warning fw-bold"
          style={{ borderRadius: "8px" }}
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
