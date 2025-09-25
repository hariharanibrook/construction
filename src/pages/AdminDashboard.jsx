import React from "react";

export default function AdminDashboard() {
  // Dummy data
  const users = [
    { name: "Alice", role: "Manager", status: "Active" },
    { name: "Bob", role: "Employee", status: "Inactive" },
    { name: "Charlie", role: "Employee", status: "Active" },
  ];

  const reports = [
    { title: "Monthly Sales", date: "2025-09-01", author: "Alice" },
    { title: "Project Progress", date: "2025-09-15", author: "Bob" },
  ];

  const settings = [
    { key: "Site Name", value: "BuildTrack Portal" },
    { key: "Max Users", value: 50 },
    { key: "Theme", value: "Light / Dark" },
  ];

  // Dummy stats
  const stats = [
    { label: "Total Users", value: 23, color: "#FF6F61" }, // bright coral
    { label: "Active Projects", value: 8, color: "#6B5B95" }, // vibrant purple
    { label: "Pending Reports", value: 5, color: "#88B04B" }, // fresh green
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <p>Full access: Users, Reports, Settings.</p>

      {/* Stats Cards */}
      <div
        style={{ display: "flex", gap: 15, flexWrap: "wrap", marginTop: 20 }}
      >
        {stats.map((s, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 200px",
              padding: 20,
              backgroundColor: s.color,
              color: "#fff",
              borderRadius: 10,
              textAlign: "center",
              fontWeight: "bold",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: 24 }}>{s.value}</div>
            <div>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div style={{ marginTop: 30 }}>
        <h4>Users</h4>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#e3f2fd" }}>
              <th style={{ padding: 10 }}>Name</th>
              <th style={{ padding: 10 }}>Role</th>
              <th style={{ padding: 10 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: 10 }}>{u.name}</td>
                <td style={{ padding: 10 }}>{u.role}</td>
                <td style={{ padding: 10 }}>{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reports Table */}
      <div style={{ marginTop: 30 }}>
        <h4>Reports</h4>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#fff3e0" }}>
              <th style={{ padding: 10 }}>Title</th>
              <th style={{ padding: 10 }}>Date</th>
              <th style={{ padding: 10 }}>Author</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: 10 }}>{r.title}</td>
                <td style={{ padding: 10 }}>{r.date}</td>
                <td style={{ padding: 10 }}>{r.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Settings Section */}
      <div style={{ marginTop: 30 }}>
        <h4>Settings</h4>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {settings.map((s, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 200px",
                padding: 15,
                background: "#e8f5e9",
                borderRadius: 8,
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <strong>{s.key}</strong>
              <p>{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
