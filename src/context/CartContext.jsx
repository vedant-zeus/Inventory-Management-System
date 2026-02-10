// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ ADD TO CART + AUTO OPEN
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    // 🔥 always open cart when item added
    setIsOpen(true);
  };

  // ✅ REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  // ✅ EXPLICIT OPEN / CLOSE (animation safe)
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // ✅ TOGGLE (icon click)
  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isOpen,
        toggleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
