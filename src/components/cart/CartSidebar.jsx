// src/components/cart/CartSidebar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import "./cart.css";

const sidebarVariants = {
  hidden: {
    x: 420,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 22,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    x: 420,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

export default function CartSidebar() {
  const { cartItems, isOpen, closeCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="cart-sidebar"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
        >
          {/* HEADER */}
          <div className="cart-header">
            <h3>Selected Items</h3>
            <button
              onClick={closeCart}
              aria-label="Close cart"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X />
            </button>
          </div>

          {/* BODY */}
          <div className="cart-body">
            {cartItems.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ fontSize: 14, color: "#6B7280" }}
              >
                No items selected
              </motion.p>
            ) : (
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
