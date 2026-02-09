import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Alerts", path: "/alerts" },
  { name: "Analytics", path: "/analytics" },
];

export default function Sidebar() {
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
      <h1 style={{ fontWeight: 800 }}>
        <span style={{ color: "#111" }}>blink</span>
        <span style={{ color: "#F7D046" }}>it</span>
      </h1>

      {/* MENU */}
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          style={{ textDecoration: "none" }}
        >
          {({ isActive }) => (
            <motion.div
              whileHover={{ x: 4 }}
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                marginBottom: 6,
                background: isActive ? "#F7D046" : "transparent",
                color: isActive ? "#111" : "#374151",
                fontWeight: isActive ? 600 : 500,
              }}
            >
              {item.name}
            </motion.div>
          )}
        </NavLink>
      ))}
    </div>
  );
}
