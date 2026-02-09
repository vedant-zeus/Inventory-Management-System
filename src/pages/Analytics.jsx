import { useInventory } from "../context/InventoryContext";
import { motion } from "framer-motion";

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
      <h2 style={{ marginBottom: 24 }}>📊 Business Analytics</h2>

      {/* ================= KPIs ================= */}
      <div
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 40,
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

      {/* ================= SALES TREND ================= */}
      <Section title="📈 Live Sales Trend">
      <SalesChart salesLog={salesLog} />
      </Section>

      {/* ================= DEMAND FORECAST ================= */}
      <Section title="🔮 Demand & Restock Prediction">
        <PredictionChart />
      </Section>

      {/* ================= OPERATIONAL INSIGHTS ================= */}
      <Section title="🚨 Operational Insights">
        <ul style={{ lineHeight: 1.8, paddingLeft: 18 }}>
          <li>
            <strong>{lowStockItems}</strong> products are approaching low stock
            levels.
          </li>
          <li>
            <strong>{alerts.length}</strong> alerts triggered due to stock or
            restocking events.
          </li>
          <li>
            High-frequency items should be prioritized for proactive restocking.
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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{
        background: "#FFFFFF",
        padding: 20,
        borderRadius: 16,
        border: "1px solid #E5E7EB",
        minWidth: 200,
      }}
    >
      <p style={{ fontSize: 13, color: "#64748B" }}>{title}</p>
      <h2
        style={{
          margin: 0,
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
    <div style={{ marginBottom: 40 }}>
      <h3 style={{ marginBottom: 16 }}>{title}</h3>
      {children}
    </div>
  );
}
