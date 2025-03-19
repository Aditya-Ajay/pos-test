import React from "react";
import scanner from "../assets/scanner-removebg-preview.png";

const ProductSearch = ({ handleChange }) => {
  return (
    <div className="flex items-center gap-4 mb-6 px-4 py-6 bg-gray-100">
      <div className="relative w-90">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search By SKU/Name/Barcode Number"
          className="w-full px-20 py-2 border border-gray-200 rounded-sm placeholder-black"
        />
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <img src={scanner} alt="Scanner" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
