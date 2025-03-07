import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import CashierDashboard from "./components/CashierDashboard";
import CustomerInformation from "./components/CustomerInformation";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Header"; // Import Header component
import InventoryProduct from "./components/InventoryProduct";

const App = () => {
  return (
    <>
          <Header /> {/* Use Header component */}
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cashier-dashboard" element={<CashierDashboard/>} />
        <Route path="/customer-information" element={<CustomerInformation/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/admin-dashboard/inventory" element={<InventoryProduct/>} />
      </Routes>
    </Router>
          </>
  );
};

export default App;
