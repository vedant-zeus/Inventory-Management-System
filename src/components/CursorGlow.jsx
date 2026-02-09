import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 50,
        top: pos.y - 50,
        width: 100,
        height: 100,
        background:
          "radial-gradient(circle, rgba(9, 9, 9, 0.2), transparent 90%)",
        filter: "blur(20px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
