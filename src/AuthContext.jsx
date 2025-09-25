import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const LOCAL_TOKEN_KEY = "app_token";
const LOCAL_ROLE_KEY = "app_role";

/**
 * NOTE: For demo we store token+role in localStorage.
 * In production, use httpOnly cookies or secure token storage.
 */

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(() =>
    localStorage.getItem(LOCAL_TOKEN_KEY)
  );
  const [role, setRole] = useState(() => localStorage.getItem(LOCAL_ROLE_KEY));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) localStorage.setItem(LOCAL_TOKEN_KEY, token);
    else localStorage.removeItem(LOCAL_TOKEN_KEY);
  }, [token]);

  useEffect(() => {
    if (role) localStorage.setItem(LOCAL_ROLE_KEY, role);
    else localStorage.removeItem(LOCAL_ROLE_KEY);
  }, [role]);

  const login = async ({ usernameOrEmail, password }) => {
    setLoading(true);
    try {
      // local dummy validation will be done in Login.jsx — but we keep this wrapper for symmetry
      // Real app: call server endpoint here.
      setLoading(false);
      return { ok: false, message: "Not implemented" };
    } catch (err) {
      setLoading(false);
      return { ok: false, message: "Network error" };
    }
  };

  const setSession = ({ token: t, role: r }) => {
    setToken(t);
    setRole(r);
    // redirect based on role
    if (r === "Admin") navigate("/admin");
    else if (r === "Manager") navigate("/manager");
    else navigate("/employee");
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    // optionally notify server
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ token, role, login, setSession, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
