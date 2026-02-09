import { motion } from "framer-motion";

export default function StatCard({ title, value, accent = "#F7D046" }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{
        position: "relative",
        padding: "20px 22px",
        minWidth: 220,
        borderRadius: 14,
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* ACCENT STRIP */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 8,
          background: accent,
        }}
      />

      {/* CONTENT */}
      <p
        style={{
          margin: 0,
          fontSize: 13,
          color: "#6B7280",
          marginBottom: 6,
        }}
      >
        {title}
      </p>

      <h2
        style={{
          margin: 0,
          fontSize: "2rem",
          fontWeight: 700,
          color: "#0F172A",
        }}
      >
        {value}
      </h2>

      {/* SUBTLE HOVER GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${accent}33, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}
