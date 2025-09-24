import React from "react";
export default function AccessDenied() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <a href="/login">Back to Login</a>
    </div>
  );
}
