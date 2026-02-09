import { motion } from "framer-motion";

// Dummy prediction data (replace later with ML output)
const predictionData = [
  { day: "Mon", demand: 140 },
  { day: "Tue", demand: 160 },
  { day: "Wed", demand: 180 },
  { day: "Thu", demand: 200 },
  { day: "Fri", demand: 230 },
  { day: "Sat", demand: 260 },
  { day: "Sun", demand: 240 },
];

const currentStock = 180;

// Calculations
const totalPredicted = predictionData.reduce((s, d) => s + d.demand, 0);
const avgDailyDemand = Math.round(totalPredicted / predictionData.length);
const stockGap = currentStock - avgDailyDemand;

export default function PredictionChart() {
  return (
    <div>
      {/* TOP INSIGHTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div>
          <p style={{ fontSize: 13, color: "#64748B" }}>
            Avg Daily Demand
          </p>
          <h2 style={{ margin: 0 }}>{avgDailyDemand} units</h2>
        </div>

        <div>
          <p style={{ fontSize: 13, color: "#64748B" }}>
            Current Stock
          </p>
          <h2 style={{ margin: 0 }}>{currentStock} units</h2>
        </div>

        <div>
          <p style={{ fontSize: 13, color: "#64748B" }}>
            Stock Status
          </p>
          <h2
            style={{
              margin: 0,
              color: stockGap < 0 ? "#EF4444" : "#16A34A",
            }}
          >
            {stockGap < 0 ? "Shortage" : "Sufficient"}
          </h2>
        </div>
      </div>

      {/* DEMAND BARS */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 12,
          height: 120,
          marginTop: 20,
        }}
      >
        {predictionData.map((item) => (
          <motion.div
            key={item.day}
            initial={{ height: 0 }}
            animate={{ height: item.demand / 2.5 }}
            transition={{ duration: 0.6 }}
            style={{
              width: 24,
              borderRadius: 6,
              background:
                item.demand > currentStock
                  ? "#EF4444"
                  : "#16A34A",
            }}
            title={`${item.day}: ${item.demand} units`}
          />
        ))}
      </div>

      {/* X AXIS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
          fontSize: 12,
          color: "#64748B",
        }}
      >
        {predictionData.map((item) => (
          <span key={item.day}>{item.day}</span>
        ))}
      </div>

      {/* AI INSIGHT */}
      <div
        style={{
          marginTop: 16,
          padding: 12,
          borderRadius: 12,
          background: "#F8FAFC",
          border: "1px solid #E5E7EB",
          fontSize: 14,
        }}
      >
        🤖 <b>AI Insight:</b>{" "}
        {stockGap < 0
          ? `Predicted demand exceeds current stock. Recommended reorder: ${Math.abs(
              stockGap
            ) + 40} units.`
          : "Current inventory is sufficient for predicted demand."}
      </div>
    </div>
  );
}
