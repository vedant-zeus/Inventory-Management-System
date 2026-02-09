export default function AIExplanationPanel() {
  return (
    <div
      style={{
        marginTop: 30,
        padding: 24,
        borderRadius: 20,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "black",
      }}
    >
      <h3>🤖 AI Insight</h3>
      <p>
        Predicted demand exceeds current stock. Recommended reorder: 60 units.
      </p>
    </div>
  );
}
