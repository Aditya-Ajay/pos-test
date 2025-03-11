import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignIn from "./components/SignIn";
import CashierDashboard from "./components/CashierDashboard";
import CustomerInformation from "./components/CustomerInformation";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Header"; // Import Header component
import InventoryProduct from "./components/InventoryProduct";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide Header on SignIn page
  const hideHeader = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      {!hideHeader && <Header />}

      {/* Main Content (with padding when Header is present) */}
      <main className={`flex-1 ${hideHeader ? "" : "mt-[80px]"}`}>
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cashier-dashboard" element={<CashierDashboard />} />
          <Route path="/customer-information" element={<CustomerInformation />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/inventory" element={<InventoryProduct />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
