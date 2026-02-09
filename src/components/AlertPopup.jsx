import { motion } from "framer-motion";
import { useInventory } from "../context/InventoryContext";

export default function AlertPopup() {
  const { popup } = useInventory();

  if (!popup) return null;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        padding: "14px 20px",
        background: "#FEF3C7",
        color: "#92400E",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        zIndex: 9999,
        fontWeight: 500,
      }}
    >
      ⚠️ {popup.message}
    </motion.div>
  );
}
