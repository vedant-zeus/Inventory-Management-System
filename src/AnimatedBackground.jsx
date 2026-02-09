import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ x: [0, 100, -60], y: [0, -80, 40] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          filter: "blur(120px)",
          top: "-20%",
          left: "-10%",
        }}
      />
    </div>
  );
}
