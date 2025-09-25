import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const MENU_BY_ROLE = {
  Admin: [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/users", label: "User Management" },
    { to: "/admin/reports", label: "Reports" },
    { to: "/admin/settings", label: "Settings" },
  ],
  Manager: [
    { to: "/manager", label: "Dashboard" },
    { to: "/manager/users", label: "User Management" },
    { to: "/manager/reports", label: "Reports" },
  ],
  Employee: [
    { to: "/employee", label: "Dashboard" },
    { to: "/employee/reports", label: "Reports" },
  ],
};

export default function RoleMenu() {
  const { role, logout } = useAuth();
  const location = useLocation();
  const items = MENU_BY_ROLE[role] || [];

  return (
    <aside
      style={{
        width: 220,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffb400, #ff6f00)", // yellow-orange gradient
        color: "#000",
        padding: "20px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "2px 0 6px rgba(0,0,0,0.3)",
      }}
    >
      {/* Role & Menu */}
      <div>
        <div
          style={{
            marginBottom: 25,
            fontWeight: "bold",
            fontSize: 18,
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            paddingBottom: 12,
          }}
        >
          Role: {role}
        </div>

        <nav>
          {items.map((it) => {
            const active = location.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 8,
                  marginBottom: 10,
                  textDecoration: "none",
                  fontWeight: 500,
                  color: active ? "#fff" : "#000",
                  backgroundColor: active ? "rgba(0,0,0,0.2)" : "transparent",
                  transition: "all 0.2s ease-in-out",
                  boxShadow: active ? "inset 3px 0 #000" : "none",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div>
        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: 8,
            backgroundColor: "#000",
            color: "#ffb400",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000")}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
