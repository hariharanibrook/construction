import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Full access: Users, Reports, Settings.</p>
      <div style={{ marginTop: 20 }}>
        <div style={{ padding: 10, background: "#e3f2fd", marginBottom: 10 }}>
          Users: Add/Edit/Delete users
        </div>
        <div style={{ padding: 10, background: "#fff3e0", marginBottom: 10 }}>
          Reports: View all company reports
        </div>
        <div style={{ padding: 10, background: "#e8f5e9", marginBottom: 10 }}>
          Settings: Update system configuration
        </div>
      </div>
    </div>
  );
}
