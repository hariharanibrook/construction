import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ for forgot password
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bgImage from "./assests/image.jpg";

const USERS = [
  { email: "admin@gmail.com", password: "admin123", role: "Admin" },
  { email: "manager@gmail.com", password: "manager123", role: "Manager" },
  { email: "employee@gmail.com", password: "employee123", role: "Employee" },
  { email: "test@gamil.com", password: "test123", role: "test" },
];

const MAX_ATTEMPTS = 5;
const LOCK_DURATION_MS = 1000 * 60 * 30; // 30 minutes

export default function Login() {
  const { setSession } = useAuth();

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(() => {
    const raw = localStorage.getItem("login_attempts");
    return raw ? JSON.parse(raw) : { count: 0, firstAttemptAt: Date.now() };
  });
  const [lockedUntil, setLockedUntil] = useState(() => {
    const raw = localStorage.getItem("locked_until");
    return raw ? Number(raw) : null;
  });

  useEffect(() => {
    localStorage.setItem("login_attempts", JSON.stringify(attempts));
  }, [attempts]);

  useEffect(() => {
    if (lockedUntil) localStorage.setItem("locked_until", String(lockedUntil));
    else localStorage.removeItem("locked_until");
  }, [lockedUntil]);

  useEffect(() => {
    const resetMs = 1000 * 60 * 15;
    if (Date.now() - attempts.firstAttemptAt > resetMs) {
      setAttempts({ count: 0, firstAttemptAt: Date.now() });
    }
  }, [attempts.firstAttemptAt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (lockedUntil && Date.now() < lockedUntil) {
      setError(
        `Account locked. Try again at ${new Date(lockedUntil).toLocaleString()}`
      );
      return;
    }

    const found = USERS.find(
      (u) => u.email.toLowerCase() === usernameOrEmail.trim().toLowerCase()
    );

    if (!found || found.password !== password) {
      const nextCount = (attempts.count || 0) + 1;
      setAttempts({
        count: nextCount,
        firstAttemptAt: attempts.firstAttemptAt || Date.now(),
      });

      if (nextCount >= MAX_ATTEMPTS) {
        const until = Date.now() + LOCK_DURATION_MS;
        setLockedUntil(until);
        setError(
          "Account locked due to multiple failed attempts. Please follow the unlocking procedure."
        );
      } else {
        setError("Invalid username or password.");
      }
      return;
    }

    const demoToken = "demo-token-" + Math.random().toString(36).slice(2);
    setSession({ token: demoToken, role: found.role });

    setAttempts({ count: 0, firstAttemptAt: Date.now() });
    setLockedUntil(null);
  };

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
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* Card */}
      <div
        className="card shadow-lg border-0 p-4"
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
        <div className="text-center mb-2">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#ffc107",
            }}
          >
            <i className="bi bi-building fs-2 text-dark"></i>
          </div>
          <h2 className="fw-bold">BuildTrack</h2>
          <p className="text-light small">Construction Worker Portal</p>
        </div>

        <h5 className="fw-bold text-center mb-3">Site Entry</h5>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light small">
              Email / Username
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light border-0"
              style={{ borderRadius: "8px" }}
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              placeholder="Enter your email or username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light small">Password</label>
            <div className="input-group">
              <input
                type={showPw ? "text" : "password"}
                className="form-control bg-dark text-light border-0"
                style={{ borderRadius: "8px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => setShowPw((s) => !s)}
              >
                <i className={`bi ${showPw ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-100 fw-bold mt-2"
            style={{
              backgroundColor: "#ffc107",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-warning small">
              Forgot Password?
            </Link>
          </div>

          {/* Error Message */}
          {error && <div className="alert alert-danger mt-3 py-2">{error}</div>}

          <p className="text-light small mt-3 text-center">
            Attempts: {attempts.count} / {MAX_ATTEMPTS}
          </p>
        </form>
      </div>
    </div>
  );
}
