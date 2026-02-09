import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(username, password);

    if (!success) {
      setError("Invalid username or password");
      return;
    }

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        background:
          "radial-gradient(1200px at 10% 10%, #FEF3C7 0%, transparent 40%), radial-gradient(1200px at 90% 20%, #DCFCE7 0%, transparent 40%), #FFFBEB",
      }}
    >
      {/* LEFT BRAND PANEL */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 80,
        }}
      >
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "3.5rem",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            marginBottom: 12,
          }}
        >
          <span style={{ color: "#111111" }}>blink</span>
          <span style={{ color: "#16A34A" }}>it</span>
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#374151",
            maxWidth: 420,
            lineHeight: 1.5,
          }}
        >
          Inventory intelligence platform for real-time stock monitoring,
          analytics, and automated restocking.
        </p>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: "#FFFFFF",
            padding: "40px 36px",
            borderRadius: 24,
            width: 360,
            boxShadow:
              "0 30px 60px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ marginBottom: 6 }}>Welcome back</h2>
          <p style={{ color: "#6B7280", marginBottom: 24 }}>
            Sign in to continue
          </p>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#DC2626", fontSize: 13, marginBottom: 12 }}
            >
              {error}
            </motion.p>
          )}

          <button onClick={handleLogin} style={buttonStyle}>
            Sign In
          </button>

          <div
            style={{
              marginTop: 18,
              fontSize: 12,
              color: "#6B7280",
              lineHeight: 1.6,
            }}
          >
            <strong>Demo credentials</strong>
            <br />
            Admin → <code>admin / admin123</code>
            <br />
            User → <code>user / user123</code>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: 14,
  borderRadius: 12,
  border: "1px solid #E5E7EB",
  fontSize: 14,
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: 14,
  border: "none",
  background: "#16A34A",
  color: "#FFFFFF",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
};
