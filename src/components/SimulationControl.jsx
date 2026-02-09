  import { useInventory } from "../context/InventoryContext";

export default function SimulationControl() {
  const {
    simulationRunning,
    startSimulation,
    stopSimulation,
  } = useInventory();

  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: 16,
        borderRadius: 14,
        border: "1px solid #E5E7EB",
        marginBottom: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h4 style={{ margin: 0 }}>⚙ Live Simulation</h4>
        <p style={{ fontSize: 13, color: "#6B7280" }}>
          Simulates random real-time purchases
        </p>
      </div>

      {!simulationRunning ? (
        <button
          onClick={startSimulation}
          style={buttonStyle("#16A34A")}
        >
          ▶ Start
        </button>
      ) : (
        <button
          onClick={stopSimulation}
          style={buttonStyle("#DC2626")}
        >
          ■ Stop
        </button>
      )}
    </div>
  );
}

const buttonStyle = (color) => ({
  padding: "8px 16px",
  borderRadius: 10,
  border: "none",
  background: color,
  color: "#FFFFFF",
  fontWeight: 600,
  cursor: "pointer",
});
