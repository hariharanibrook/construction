import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
import RequireRole from "./RequireRole";
import RoleMenu from "./RoleMenu";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AccessDenied from "./pages/AccessDenied";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/access-denied" element={<AccessDenied />} />

          {/* Admin */}
          <Route
            path="/admin/*"
            element={
              <RequireAuth>
                <RequireRole allowed={["Admin"]}>
                  <div style={{ display: "flex", minHeight: "100vh" }}>
                    <RoleMenu />
                    <div style={{ padding: 20, flex: 1 }}>
                      <Routes>
                        <Route index element={<AdminDashboard />} />
                        <Route
                          path="users"
                          element={<div>User Management (Admin)</div>}
                        />
                        <Route
                          path="reports"
                          element={<div>Reports (Admin)</div>}
                        />
                        <Route
                          path="settings"
                          element={<div>Settings (Admin)</div>}
                        />
                        <Route
                          path="*"
                          element={<Navigate to="/admin" replace />}
                        />
                      </Routes>
                    </div>
                  </div>
                </RequireRole>
              </RequireAuth>
            }
          />

          {/* Manager */}
          <Route
            path="/manager/*"
            element={
              <RequireAuth>
                <RequireRole allowed={["Manager"]}>
                  <div style={{ display: "flex", minHeight: "100vh" }}>
                    <RoleMenu />
                    <div style={{ padding: 20, flex: 1 }}>
                      <Routes>
                        <Route index element={<ManagerDashboard />} />
                        <Route
                          path="users"
                          element={<div>User Management (Manager)</div>}
                        />
                        <Route
                          path="reports"
                          element={<div>Reports (Manager)</div>}
                        />
                        <Route
                          path="*"
                          element={<Navigate to="/manager" replace />}
                        />
                      </Routes>
                    </div>
                  </div>
                </RequireRole>
              </RequireAuth>
            }
          />

          {/* Employee */}
          <Route
            path="/employee/*"
            element={
              <RequireAuth>
                <RequireRole allowed={["Employee"]}>
                  <div style={{ display: "flex", minHeight: "100vh" }}>
                    <RoleMenu />
                    <div style={{ padding: 20, flex: 1 }}>
                      <Routes>
                        <Route index element={<EmployeeDashboard />} />
                        <Route
                          path="reports"
                          element={<div>Reports (Employee)</div>}
                        />
                        <Route
                          path="*"
                          element={<Navigate to="/employee" replace />}
                        />
                      </Routes>
                    </div>
                  </div>
                </RequireRole>
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}
