import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assests/image.jpg";

export default function AccessDenied() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>
      <div
        className="card shadow-lg p-4 text-center"
        style={{
          maxWidth: 400,
          width: "100%",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.1)",
          color: "white",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: 50, color: "#ffc107", marginBottom: 20 }}>
          <i className="bi bi-x-circle"></i>
        </div>
        <h2 className="fw-bold mb-2">Access Denied</h2>
        <p className="mb-4">You do not have permission to view this page.</p>
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
