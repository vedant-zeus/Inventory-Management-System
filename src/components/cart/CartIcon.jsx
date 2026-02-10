// src/components/cart/CartIcon.jsx
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./cart.css";

export default function CartIcon() {
  const { cartItems, openCart } = useCart();

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <motion.div
      className="cart-icon"
      onClick={openCart}          // ✅ EXPLICIT OPEN
      whileTap={{ scale: 0.9 }}
      animate={
        totalItems > 0
          ? { scale: [1, 1.2, 1] }
          : { scale: 1 }
      }
      transition={{ duration: 0.3 }}
    >
      <ShoppingCart size={22} />

      {totalItems > 0 && (
        <motion.span
          className="badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {totalItems}
        </motion.span>
      )}
    </motion.div>
  );
}
