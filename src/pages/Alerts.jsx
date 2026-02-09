import { useInventory } from "../context/InventoryContext";
import AlertPopup from "../components/AlertPopup";

export default function Alerts() {
  const { alerts } = useInventory();

  return (
    <div style={{ padding: 20 }}>
      <AlertPopup /> {/* 👈 POPUP ENABLED */}

      <h2>Alerts</h2>

      {alerts.length === 0 && <p>No alerts 🎉</p>}

      {alerts.map((alert) => (
        <div
          key={alert.id}
          style={{
            background: "#FEF2F2",
            color: "#991B1B",
            padding: 12,
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          ⚠️ {alert.message}
        </div>
      ))}
    </div>
  );
}
