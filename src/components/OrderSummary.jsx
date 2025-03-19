import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {  fetchProductById, removeProduct }from '../redux/Product/ProductSlice';
import { UserPlus, X, CreditCard, Banknote ,Tag} from 'lucide-react';
import  {Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "./ui/select";
import { fetchCustomerByNumber } from '../redux/Customer/CustomerSlice';

const OrderSummary = ({
  products,
  customer,
  phoneNumber,
  setPhoneNumber,
  grandTotal,
  total,
  disable,
  confirmDisable,
  discountAmount,
  discountPercentage,
  setGrandTotal,
  setDisable,
  setConfirmDisable,
  setOpen,
  edit,
  layawayOptions,
  handleCancelModal,
  confirmOrder
}) => {
  const dispatch = useDispatch();

  const handleDiscountPercentage = () => {
    const value = discountPercentage.current.value;
    if (value) {
      const percentage = parseFloat(value);
      if (!isNaN(percentage)) {
        const amount = (percentage / 100) * total;
        discountAmount.current.value = `$ ${amount.toFixed(2)}`;
      }
    } else {
      discountAmount.current.value = "";
    }
  };

  const handleAmountChange = () => {
    const value = discountAmount.current.value;
    if (value) {
      const amount = parseFloat(value);
      if (!isNaN(amount)) {
        const percentage = (amount / total) * 100;
        discountPercentage.current.value = percentage.toFixed(2);
      }
    } else {
      discountPercentage.current.value = "";
    }
  };

  const DiscountApply = () => {
    setGrandTotal(grandTotal - parseFloat(discountAmount.current.value.replace('$', '').trim()));
  };

  useEffect(() => {
    if (phoneNumber.replace(/\D/g, "").length === 10) {
      let number = `${countryCode}-${phoneNumber}`;
      dispatch(fetchCustomerByNumber(number));
    }
  }, [phoneNumber]);

  return (
    <div className="w-100">
      <div className="bg-white px-8 pt-2 shadow-sm pb-8" style={{ borderRadius: "4px" }}>
        <h2 className="text-xl font-semibold mb-2" style={{ color: "#2C2384" }}>Order Summary</h2>
        <p className="text-gray-500 text-sm mb-6" style={{ background: "#E8F6F8", paddingLeft: '1rem', paddingRight: "1rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", width: "55%" }}>Transaction ID #1982761892</p>

        <div className="relative flex items-center gap-2 mb-6">
          {Object.keys(customer).length === 0 ? (
            <>
              <input
                type="text"
                placeholder="+91  Add Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                className="flex-1 px-4 py-2 rounded-sm pl-10"
                style={{ border: "1px solid #BFBCDD" }}
              />
              <button
                className="absolute right-0 p-2 pl-4 pr-4 text-gray-600 transition"
                style={{ background: '#F9FAFB' }}
                onClick={() => setOpen(!open)}
              >
                <UserPlus size={24} style={{ color: "rgba(85, 66, 186, 1)" }} />
              </button>
            </>
          ) : (
            <div className="flex items-center">
              <p className="mr-10">{` Customer :   ${customer.name}`}</p>
              <button
                className="flex ml-40 text-blue-500 hover:text-blue-700"
                onClick={() => setOpen(!open)}
              >
                <img src={edit} alt="" width={30} />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>Actual Amount:</span>
            <span>${total}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Discount:</span>
            <input
              type="number"
              placeholder="0%"
              disabled={disable}
              className="w-20 px-2 py-1 border border-gray-200 rounded-sm"
              onChange={handleDiscountPercentage}
              ref={discountPercentage}
            />
            <span>Or</span>
            <input
              type="text"
              placeholder="$ 0.000"
              disabled={disable}
              className="w-24 px-2 py-1 border border-gray-200 rounded-sm"
              onChange={handleAmountChange}
              ref={discountAmount}
            />
            <button style={{ color: '#5542BA', border: "1px solid #2C2384 ", padding: "10px 16px", backgroundColor: "#F9FAFB" }} onClick={DiscountApply}>
              Apply
            </button>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span>8.65%</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Grand Total:</span>
            <span>$ {grandTotal}</span>
          </div>
        </div>

        <div className="w-full max-w-md flex items-center justify-between gap-2 bg-white rounded-sm p-6 shadow-sm" style={{ backgroundColor: "#FFF6E6" }}>
          <Tag className="text-gray-400 w-5 h-5" />
          <div className="flex-grow">
            Enter Coupon Code
          </div>

          <button
            className="px-4 py-1 text-[#FF6B35] hover:bg-orange-50 rounded transition-colors text-sm font-medium"
          >
            Apply
          </button>
        </div>

        <button className="w-full text-center py-3 rounded-sm mb-4" style={{ color: "#2C2384", fontWeight: "500", textDecoration: "underline" }}>
          Add Exchange
        </button>

        <div className="text-center mb-4 p-4" style={{ background: '#EAF6EC', color: "#24983F" }}>
          <div className="text-sm text-gray-500">Payable Amount</div>
          <div className="text-2xl font-bold">$ {grandTotal}</div>
        </div>

        <button className="w-full mt-5 py-3 font-bold rounded-sm" style={{ backgroundColor: "#2C2384", color: "white" }} disabled={confirmDisable} onClick={confirmOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
