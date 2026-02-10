import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    x: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <motion.div
      className="cart-item"
      variants={itemVariants}
    >
      <div>
        <strong>{item.name}</strong>
        <p style={{ fontSize: 12 }}>
          Quantity: {item.quantity}
        </p>
      </div>

      <Trash2
        size={16}
        onClick={() => removeFromCart(item.id)}
        style={{ cursor: "pointer" }}
      />
    </motion.div>
  );
}
