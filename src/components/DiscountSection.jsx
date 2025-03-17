import React, { useRef } from "react";

const DiscountSection = ({ total, setGrandTotal }) => {
  const discountPercentage = useRef(null);
  const discountAmount = useRef(null);

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
    setGrandTotal((prev) => prev - parseFloat(discountAmount.current.value.replace('$', '').trim()));
  };

  return (
    <div>
      <input ref={discountPercentage} onChange={handleDiscountPercentage} placeholder="Discount %" />
      <input ref={discountAmount} onChange={handleAmountChange} placeholder="Discount Amount" />
      <button onClick={DiscountApply}>Apply</button>
    </div>
  );
};

export default DiscountSection;
