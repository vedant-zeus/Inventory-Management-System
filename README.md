# 📦 Blinkit-Inspired Inventory & Analytics Dashboard

A **real-time inventory management and business analytics dashboard** inspired by Blinkit, built using **React, Context API, React Router, and Framer Motion**. 

This project simulates **inventory flow, live sales tracking, automated restocking alerts, role-based authentication**, and **data-driven analytics** in a single-page application.

---

## 🚀 Project Motivation

Quick-commerce platforms like Blinkit operate on:
- **Real-time inventory visibility:** Knowing exactly what's on the shelf.
- **Instant sales tracking:** Monitoring revenue as it happens.
- **Proactive stock alerts:** Preventing out-of-stock scenarios.
- **Analytics-driven decision making:** Using data to optimize operations.

This project was built to **simulate such a system on the frontend**, focusing on clean architecture, scalable state management, and professional UI/UX. It is designed as a **portfolio-grade project** suitable for internships, interviews, and real-world demonstrations.

---

## 🧠 Core Features

- ✅ **Inventory Simulation:** Real-time stock level management.
- ✅ **Live Sales Logging:** Automatic tracking of every transaction.
- ✅ **Auto-Restocking Logic:** Logic-based replenishment of depleted items.
- ✅ **Low-Stock Alerts:** Instant popup notifications for operational risks.
- ✅ **Cart System:** Live purchase simulation that affects global state.
- ✅ **Role-Based Authentication:** Distinct views and permissions for Admin and User.
- ✅ **Protected Routes:** Secure navigation based on auth status.
- ✅ **Real-Time Analytics:** Dashboard with KPIs and data visualizations.
- ✅ **Animated UI:** Smooth transitions and micro-interactions using Framer Motion.

---

## 🗂 Folder Architecture

```text
inventory-dashboard/
│
├── public/
│   ├── rice.jpg
│   ├── milk.jpg
│   ├── bread.jpg
│   └── ... (product images)
│
├── src/
│   ├── assets/
│   ├── charts/
│   │   ├── SalesChart.jsx
│   │   └── PredictionChart.jsx
│   │
│   ├── components/
│   │   ├── AIExplanationPanel.jsx
│   │   ├── AlertPopup.jsx
│   │   ├── Cart.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── InventoryContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Inventory.jsx
│   │   ├── Alerts.jsx
│   │   └── Analytics.jsx
│   │
│   ├── AnimatedBackground.jsx
│   ├── PageTransition.jsx
│   ├── StatCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md