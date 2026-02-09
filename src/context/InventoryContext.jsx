import { createContext, useContext, useState, useRef } from "react";

const InventoryContext = createContext();

/* ---------------- INITIAL DATA ---------------- */
const INITIAL_ITEMS = [
  { id: 1, name: "Rice", stock: 50, threshold: 10 },
  { id: 2, name: "Milk", stock: 30, threshold: 8 },
  { id: 3, name: "Biscuits", stock: 40, threshold: 12 },
  { id: 4, name: "Juice", stock: 20, threshold: 5 },

  { id: 5, name: "Bread", stock: 25, threshold: 6 },
  { id: 6, name: "Eggs", stock: 60, threshold: 15 },
  { id: 7, name: "Butter", stock: 18, threshold: 5 },
  { id: 8, name: "Cheese", stock: 22, threshold: 6 },

  { id: 9, name: "Yogurt", stock: 28, threshold: 7 },
  { id: 10, name: "Oil", stock: 35, threshold: 10 },
  { id: 11, name: "Sugar", stock: 40, threshold: 12 },
  { id: 12, name: "Salt", stock: 45, threshold: 15 },

  { id: 13, name: "Tea", stock: 20, threshold: 6 },
  { id: 14, name: "Coffee", stock: 18, threshold: 5 },
  { id: 15, name: "Noodles", stock: 55, threshold: 15 },
  { id: 16, name: "Chips", stock: 48, threshold: 12 },
  { id: 17, name: "Chocolate", stock: 30, threshold: 8 },
  { id: 18, name: "IceCream", stock: 16, threshold: 4 },
];

export function InventoryProvider({ children }) {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [alerts, setAlerts] = useState([]);
  const [popup, setPopup] = useState(null);

  /* 🔥 SALES + SIMULATION STATE */
  const [salesLog, setSalesLog] = useState([]);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const simulationRef = useRef(null);

  /* ---------------- ALERT HELPERS ---------------- */
  const showPopup = (message, type = "warning") => {
    setPopup({ message, type });
    setTimeout(() => setPopup(null), 3000);
  };

  const addAlert = (message) => {
    setAlerts((prev) => [{ id: Date.now(), message }, ...prev]);
    showPopup(message);
  };

  /* ---------------- BUY ITEM ---------------- */
  const buyItem = (id, qty = 1) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const newStock = item.stock - qty;

        /* LOG SALE */
        setSalesLog((prev) => [
          ...prev,
          {
            item: item.name,
            qty,
            price: 40,
            time: new Date(),
          },
        ]);

        /* AUTO RESTOCK */
        if (newStock <= 0) {
          addAlert(`${item.name} is out of stock. Auto-restocked.`);
          return { ...item, stock: 50 };
        }

        /* LOW STOCK ALERT */
        if (newStock <= item.threshold) {
          addAlert(`${item.name} stock low (${newStock} left)`);
        }

        return { ...item, stock: newStock };
      })
    );
  };

  /* ---------------- REAL-TIME SIMULATION ---------------- */
  const startSimulation = () => {
    if (simulationRunning) return;

    setSimulationRunning(true);

    simulationRef.current = setInterval(() => {
      const randomItem =
        items[Math.floor(Math.random() * items.length)];

      const qty = Math.ceil(Math.random() * 3);

      buyItem(randomItem.id, qty);
    }, 2000);
  };

  const stopSimulation = () => {
    setSimulationRunning(false);
    clearInterval(simulationRef.current);
  };

  return (
    <InventoryContext.Provider
      value={{
        items,
        buyItem,
        alerts,
        popup,
        setPopup,
        salesLog,

        /* SIMULATION CONTROLS */
        simulationRunning,
        startSimulation,
        stopSimulation,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export const useInventory = () => useContext(InventoryContext);
