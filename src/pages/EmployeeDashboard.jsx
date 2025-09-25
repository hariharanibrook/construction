import React from "react";

export default function EmployeeDashboard() {
  // Dummy reports
  const reports = [
    { title: "Daily Work Log", date: "2025-09-20", status: "Completed" },
    { title: "Safety Inspection", date: "2025-09-18", status: "Pending" },
    { title: "Equipment Checklist", date: "2025-09-17", status: "Completed" },
  ];

  // Dummy stats
  const stats = [
    { label: "Total Users", value: 23, color: "#FF6F61" }, // bright coral
    { label: "Active Projects", value: 8, color: "#6B5B95" }, // vibrant purple
    { label: "Pending Reports", value: 5, color: "#88B04B" }, // fresh green
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Employee Dashboard</h1>
      <p>Access: Reports only.</p>

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

      {/* Reports Table */}
      <div style={{ marginTop: 30 }}>
        <h4>My Reports</h4>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#e3f2fd" }}>
              <th style={{ padding: 10 }}>Title</th>
              <th style={{ padding: 10 }}>Date</th>
              <th style={{ padding: 10 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: 10 }}>{r.title}</td>
                <td style={{ padding: 10 }}>{r.date}</td>
                <td style={{ padding: 10 }}>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
