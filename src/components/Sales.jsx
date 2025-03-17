import React from "react";
import bin from "../assets/bin.png";

const Sales = ({ products, handleDelete }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left p-4 font-normal">#</th>
          <th className="text-left p-4 font-normal">Image</th>
          <th className="text-left p-4 font-normal">SKU</th>
          <th className="text-left p-4 font-normal">Product Type</th>
          <th className="text-left p-4 font-normal">Price</th>
          <th className="text-left p-4 font-normal">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product?._id} className="border-t">
            <td className="p-4">{index + 1}</td>
            <td className="p-4">
              <img src={product.image} alt={product.name} className="w-10 h-10" />
            </td>
            <td className="p-4">{product.sku}</td>
            <td className="p-4">{product.type}</td>
            <td className="p-4">${product.finalPrice}</td>
            <td className="p-4">
              <button onClick={() => handleDelete(product._id)}>
                <img src={bin} alt="Delete" className="w-6 h-6" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sales;
