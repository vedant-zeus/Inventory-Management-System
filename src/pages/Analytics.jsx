import { useInventory } from "../context/InventoryContext";
import { motion } from "framer-motion";
import SimulationControl from "../components/SimulationControl";

import SalesChart from "../charts/SalesChart";
import PredictionChart from "../charts/PredictionChart";

export default function Analytics() {
  const { items, salesLog, alerts } = useInventory();

  /* ---------------- KPI CALCULATIONS ---------------- */
  const totalOrders = salesLog.reduce((sum, log) => sum + log.qty, 0);

  const revenue = salesLog.reduce(
    (sum, log) => sum + log.qty * log.price,
    0
  );

  const lowStockItems = items.filter(
    (item) => item.stock <= item.threshold
  ).length;

  return (
    <div>
      {/* HEADER */}
      <h2
        style={{
          marginBottom: 20,
          fontSize: "1.8rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        📊 Business Analytics
      </h2>

      {/* SIMULATION CONTROL */}
      <SimulationControl />

      {/* ================= KPI GRID ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}
      >
        <KPI title="Total Orders" value={totalOrders} />
        <KPI title="Revenue" value={`₹${revenue.toLocaleString()}`} />
        <KPI title="Active Products" value={items.length} />
        <KPI
          title="Low Stock Risk"
          value={lowStockItems}
          danger={lowStockItems > 3}
        />
      </div>

      {/* ================= SALES + FORECAST ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 32,
          marginBottom: 48,
        }}
      >
        <Section title="📈 Live Sales Trend">
          <SalesChart salesLog={salesLog} />
        </Section>

        <Section title="🔮 Demand Prediction">
          <PredictionChart />
        </Section>
      </div>

      {/* ================= LIVE SALES FEED ================= */}
      <Section title="🕒 Live Sales Activity">
        <div
          style={{
            maxHeight: 240,
            overflowY: "auto",
            border: "1px solid #E5E7EB",
            borderRadius: 14,
            padding: 16,
            background: "#FFFFFF",
          }}
        >
          {salesLog.length === 0 ? (
            <p style={{ fontSize: 13, color: "#6B7280" }}>
              No sales yet. Start simulation to see live activity.
            </p>
          ) : (
            salesLog
              .slice(-12)
              .reverse()
              .map((log, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    padding: "8px 0",
                    borderBottom: "1px solid #F1F5F9",
                  }}
                >
                  <span>
                    🛒 <strong>{log.item}</strong> × {log.qty}
                  </span>
                  <span style={{ color: "#6B7280" }}>
                    {new Date(log.time).toLocaleTimeString()}
                  </span>
                </div>
              ))
          )}
        </div>
      </Section>

      {/* ================= OPERATIONAL INSIGHTS ================= */}
      <Section title="🚨 Operational Insights">
        <ul
          style={{
            lineHeight: 1.9,
            paddingLeft: 18,
            fontSize: 14,
          }}
        >
          <li>
            <strong>{lowStockItems}</strong> products are nearing low stock
            thresholds.
          </li>
          <li>
            <strong>{alerts.length}</strong> system alerts generated due to
            stock events.
          </li>
          <li>
            High-demand items should be prioritized for proactive restocking.
          </li>
        </ul>
      </Section>
    </div>
  );
}

/* ---------------- SMALL REUSABLE COMPONENTS ---------------- */

function KPI({ title, value, danger }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180 }}
      style={{
        background: "#FFFFFF",
        padding: 22,
        borderRadius: 18,
        border: "1px solid #E5E7EB",
        boxShadow: danger
          ? "0 0 0 2px rgba(220,38,38,0.15)"
          : "0 8px 20px rgba(0,0,0,0.06)",
      }}
    >
      <p style={{ fontSize: 13, color: "#64748B", marginBottom: 6 }}>
        {title}
      </p>
      <h2
        style={{
          margin: 0,
          fontSize: "1.6rem",
          color: danger ? "#DC2626" : "#111827",
        }}
      >
        {value}
      </h2>
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h3
        style={{
          marginBottom: 18,
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
