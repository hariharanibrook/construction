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
        backgroundColor: "#343a40",
        color: "white",
        padding: "20px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Role Info */}
      <div>
        <div
          style={{
            marginBottom: 20,
            fontWeight: "bold",
            fontSize: 14,
            borderBottom: "1px solid #495057",
            paddingBottom: 10,
          }}
        >
          Role: {role}
        </div>

        {/* Menu Links */}
        <nav>
          {items.map((it) => {
            const active = location.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                style={{
                  display: "block",
                  padding: "10px 15px",
                  borderRadius: 8,
                  marginBottom: 8,
                  textDecoration: "none",
                  color: active ? "#ffc107" : "white",
                  backgroundColor: active ? "#495057" : "transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#495057")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = active
                    ? "#495057"
                    : "transparent")
                }
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
            backgroundColor: "#ffc107",
            color: "#343a40",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
