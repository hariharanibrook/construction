import React from "react";
import { Link } from "react-router-dom";
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
    { to: "/employee", label: "Reports" },
    { to: "/employee", label: "Dashboard" },
  ],
};

export default function RoleMenu() {
  const { role, logout } = useAuth();
  const items = MENU_BY_ROLE[role] || [];

  return (
    <aside
      style={{ padding: 12, borderRight: "1px solid #eee", minWidth: 200 }}
    >
      <div style={{ marginBottom: 12 }}>
        <strong>Role:</strong> {role}
      </div>
      <nav>
        {items.map((it) => (
          <div key={it.to} style={{ marginBottom: 8 }}>
            <Link to={it.to}>{it.label}</Link>
          </div>
        ))}
      </nav>
      <div style={{ marginTop: 20 }}>
        <button onClick={logout}>Logout</button>
      </div>
    </aside>
  );
}
