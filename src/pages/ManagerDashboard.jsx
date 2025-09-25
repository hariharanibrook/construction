import React from "react";

export default function ManagerDashboard() {
  return (
    <div>
      <h1>Manager Dashboard</h1>
      <p>Access: Reports and User Management.</p>
      <div style={{ marginTop: 20 }}>
        <div style={{ padding: 10, background: "#fff3e0", marginBottom: 10 }}>
          Users: Manage team members
        </div>
        <div style={{ padding: 10, background: "#e3f2fd", marginBottom: 10 }}>
          Reports: View team performance
        </div>
      </div>
    </div>
  );
}
