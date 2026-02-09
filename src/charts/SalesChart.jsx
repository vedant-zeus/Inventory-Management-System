import { motion } from "framer-motion";

/* -------- HELPER: GROUP SALES BY TIME -------- */
function aggregateSales(salesLog) {
  const buckets = {};

  salesLog.forEach(log => {
    const timeKey = new Date(log.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    buckets[timeKey] = (buckets[timeKey] || 0) + log.qty;
  });

  return Object.entries(buckets).map(([time, qty]) => ({
    time,
    qty,
  }));
}

export default function SalesChart({ salesLog = [] }) {
  const data = aggregateSales(salesLog);
  const max = Math.max(...data.map(d => d.qty), 1);

  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: 20,
        borderRadius: 16,
        border: "1px solid #E5E7EB",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: 12 }}>
        <strong>Live Orders Over Time</strong>
        <p style={{ fontSize: 12, color: "#64748B" }}>
          Updates instantly with each sale
        </p>
      </div>

      {/* CHART */}
      {data.length === 0 ? (
        <p style={{ fontSize: 13, color: "#9CA3AF" }}>
          No sales yet — start adding items from Inventory
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 12,
            height: 140,
          }}
        >
          {data.map((point, i) => (
            <motion.div
              key={point.time}
              initial={{ height: 0 }}
              animate={{ height: (point.qty / max) * 120 }}
              transition={{ duration: 0.4 }}
              style={{
                width: 28,
                borderRadius: 6,
                background: "#F7D046",
                display: "flex",
                justifyContent: "center",
              }}
              title={`${point.time} — ${point.qty} orders`}
            />
          ))}
        </div>
      )}

      {/* X-AXIS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#64748B",
          marginTop: 8,
        }}
      >
        {data.map(d => (
          <span key={d.time}>{d.time}</span>
        ))}
      </div>
    </div>
  );
}
