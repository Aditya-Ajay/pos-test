import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import CashierDashboard from "./components/CashierDashboard";
import CustomerInformation from "./components/CustomerInformation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/sign-in" element={<SignIn />} />
        <Route path="/cashier-dashboard" element={<CashierDashboard/>} />
        <Route path="/customer-information" element={<CustomerInformation/>} />
      </Routes>
    </Router>
  );
};

export default App;
