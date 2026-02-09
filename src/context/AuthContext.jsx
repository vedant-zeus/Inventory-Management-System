import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  // user = { role: "admin" | "user" }

  const login = (username, password) => {
    // SIMULATED LOGIN
    if (username === "admin" && password === "admin123") {
      setUser({ role: "admin", name: "Admin" });
      return true;
    }

    if (username === "user" && password === "user123") {
      setUser({ role: "user", name: "User" });
      return true;
    }

    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
