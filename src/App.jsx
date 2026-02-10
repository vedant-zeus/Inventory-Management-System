import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/* AUTH */
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

/* CORE UI */
import PageTransition from "./PageTransition";
import AnimatedBackground from "./AnimatedBackground";
import CursorGlow from "./components/CursorGlow";
import Sidebar from "./components/Sidebar";

/* PAGES */
import Inventory from "./pages/Inventory";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";

/* DASHBOARD COMPONENTS */
import StatCard from "./StatCard";
import AIExplanationPanel from "./components/AIExplanationPanel";
import SalesChart from "./charts/SalesChart";
import PredictionChart from "./charts/PredictionChart";

/* CART */
import CartIcon from "./components/cart/CartIcon";
import CartSidebar from "./components/cart/CartSidebar";

/* ---------------- SHARED LAYOUT ---------------- */
function AppLayout({ children }) {
  return (
    <>
      {/* GLOBAL EFFECTS */}
      <AnimatedBackground />
      <CursorGlow />
      <Sidebar />

      {/* CART (GLOBAL, SINGLE INSTANCE) */}
      <CartIcon />
      <CartSidebar />

      {/* MAIN CONTENT */}
      <div
        style={{
          marginLeft: 260,
          padding: 40,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </>
  );
}

/* ---------------- DASHBOARD PAGE ---------------- */
function DashboardPage() {
  return (
    <>
      {/* HEADER */}
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "2.6rem",
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        <span style={{ color: "#111111" }}>link</span>
        <span style={{ color: "#16A34A", marginLeft: 4 }}>it</span>
      </h1>

      {/* STAT CARDS */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 30,
          flexWrap: "wrap",
        }}
      >
        <StatCard title="Total Products" value="18" accent="#F7D046" />
        <StatCard title="Low Stock" value="2" accent="#EF4444" />
        <StatCard title="Orders Today" value="560" accent="#16A34A" />
        <StatCard title="Feedbacks" value="106" accent="#38BDF8" />
      </div>

      {/* CHARTS */}
      <div style={{ marginTop: 40 }}>
        <SalesChart />
        <PredictionChart />
      </div>

      {/* AI INSIGHTS */}
      <AIExplanationPanel />
    </>
  );
}

/* ---------------- APP ROUTES ---------------- */
export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* LOGIN (PUBLIC) */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PageTransition>
                <AppLayout>
                  <DashboardPage />
                </AppLayout>
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* INVENTORY */}
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <PageTransition>
                <AppLayout>
                  <Inventory />
                </AppLayout>
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ALERTS (ADMIN ONLY) */}
        <Route
          path="/alerts"
          element={
            <ProtectedRoute role="admin">
              <PageTransition>
                <AppLayout>
                  <Alerts />
                </AppLayout>
              </PageTransition>
            </ProtectedRoute>
          }
        />

        {/* ANALYTICS (ADMIN ONLY) */}
        <Route
          path="/analytics"
          element={
            <ProtectedRoute role="admin">
              <PageTransition>
                <AppLayout>
                  <Analytics />
                </AppLayout>
              </PageTransition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
