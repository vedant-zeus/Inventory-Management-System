import { motion } from "framer-motion";
import { useInventory } from "../context/InventoryContext";

export default function SimulationControl() {
  const {
    simulationRunning,
    startSimulation,
    stopSimulation,
  } = useInventory();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        padding: 18,
        borderRadius: 16,
        border: "1px solid #E5E7EB",
        marginBottom: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      {/* LEFT CONTENT */}
      <div>
        <h4
          style={{
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          ⚙ Live Simulation
        </h4>

        <p
          style={{
            fontSize: 13,
            color: "#6B7280",
            marginTop: 4,
          }}
        >
          Randomized real-time purchase activity
        </p>

        {/* STATUS INDICATOR */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 6,
            fontSize: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: simulationRunning ? "#16A34A" : "#DC2626",
              boxShadow: simulationRunning
                ? "0 0 8px rgba(22,163,74,0.8)"
                : "none",
            }}
          />
          <span
            style={{
              color: simulationRunning ? "#16A34A" : "#DC2626",
              fontWeight: 600,
            }}
          >
            {simulationRunning ? "RUNNING" : "STOPPED"}
          </span>
        </div>
      </div>

      {/* ACTION BUTTON */}
      {!simulationRunning ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startSimulation}
          style={buttonStyle("#16A34A")}
        >
          ▶ Start
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={stopSimulation}
          style={buttonStyle("#DC2626")}
        >
          ■ Stop
        </motion.button>
      )}
    </motion.div>
  );
}

const buttonStyle = (color) => ({
  padding: "10px 18px",
  borderRadius: 12,
  border: "none",
  background: color,
  color: "#FFFFFF",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: 14,
});
