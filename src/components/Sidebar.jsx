import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const menuItems = [
  { name: "Dashboard", path: "/", adminOnly: false },
  { name: "Inventory", path: "/inventory", adminOnly: false },
  { name: "Alerts", path: "/alerts", adminOnly: true },
  { name: "Analytics", path: "/analytics", adminOnly: true },
];

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 220,
        height: "100vh",
        padding: "28px 20px",
        background: "#FFFBEB",
        borderRight: "1px solid #E5E7EB",
      }}
    >
      {/* LOGO */}
      <h1 style={{ fontWeight: 800, marginBottom: 30 }}>
        <span style={{ color: "#111" }}>link</span>
        <span style={{ color: "#F7D046" }}>it</span>
      </h1>

      {/* MENU */}
      {menuItems.map((item) => {
        const isLocked =
          item.adminOnly && user?.role !== "admin";

        return (
          <NavLink
            key={item.name}
            to={isLocked ? "#" : item.path}
            style={{ textDecoration: "none" }}
            onClick={(e) => {
              if (isLocked) e.preventDefault();
            }}
          >
            {({ isActive }) => (
              <motion.div
                whileHover={!isLocked ? { x: 4 } : {}}
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  marginBottom: 6,
                  background: isActive && !isLocked ? "#F7D046" : "transparent",
                  color: isLocked ? "#9CA3AF" : isActive ? "#111" : "#374151",
                  fontWeight: isActive ? 600 : 500,
                  cursor: isLocked ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: isLocked ? 0.6 : 1,
                }}
                title={isLocked ? "Admin access only" : ""}
              >
                <span>{item.name}</span>
                {isLocked && <span style={{ fontSize: 14 }}>🔒</span>}
              </motion.div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
