import { useInventory } from "../context/InventoryContext";
import { useCart } from "../context/CartContext";
import AlertPopup from "../components/AlertPopup";

/* PRODUCT IMAGES */
const productImages = {
  Rice: "/rice.jpg",
  Milk: "/milk.jpg",
  Biscuits: "/marie.jpg",
  Juice: "/real.jpg",

  Bread: "/bread.jpg",
  Eggs: "/eggs.jpg",
  Butter: "/butter.jpg",
  Cheese: "/cheese.jpg",

  Yogurt: "/yogurt.jpg",
  Oil: "/oil.jpg",
  Sugar: "/sugar.jpg",
  Salt: "/salt.jpg",

  Tea: "/tea.jpg",
  Coffee: "/coffee.jpg",
  Noodles: "/noodles.jpg",
  Chips: "/lays.jpg",
  Chocolate: "/chocolate.jpg",
  IceCream: "/icecream.jpg",
};

export default function Inventory() {
  const { items, buyItem } = useInventory();
  const { addToCart } = useCart();

  const handleAdd = (item) => {
    addToCart(item);      // ➕ add to cart
    buyItem(item.id, 1); // ➖ reduce stock (change quantity if needed)
  };

  return (
    <div style={{ width: "100%" }}>
      <AlertPopup />

      <h2 style={{ marginBottom: 16 }}>Inventory</h2>

      {/* FLEX CONTAINER */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          width: "100%",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              width: 200,
              background: "#FFFFFF",
              borderRadius: 16,
              padding: 14,
              border: "1px solid #E5E7EB",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* PRODUCT IMAGE */}
            <div
              style={{
                height: 130,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <img
                src={productImages[item.name] || productImages.Rice}
                alt={item.name}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* PRODUCT NAME */}
            <strong style={{ fontSize: 14 }}>{item.name}</strong>
            <p style={{ fontSize: 12, color: "#6B7280" }}>500 ml</p>

            {/* PRICE */}
            <p style={{ fontWeight: 600, marginTop: 4 }}>
              ₹{Math.floor(Math.random() * 40) + 20}
            </p>

            {/* STOCK STATUS */}
            <p
              style={{
                fontSize: 12,
                marginTop: 4,
                color:
                  item.stock <= item.threshold ? "#DC2626" : "#16A34A",
              }}
            >
              {item.stock <= item.threshold
                ? `Low stock (${item.stock})`
                : `In stock (${item.stock})`}
            </p>

            {/* ADD BUTTON */}
            <button
              onClick={() => handleAdd(item)}
              disabled={item.stock <= 0}
              style={{
                marginTop: "auto",
                padding: "8px 0",
                borderRadius: 10,
                border: "1px solid #16A34A",
                background: item.stock <= 0 ? "#E5E7EB" : "#FFFFFF",
                color: item.stock <= 0 ? "#9CA3AF" : "#16A34A",
                fontWeight: 600,
                cursor: item.stock <= 0 ? "not-allowed" : "pointer",
              }}
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
