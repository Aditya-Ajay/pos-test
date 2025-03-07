import React from "react";

function TopSellingProducts() {
  const products = [
    {
      image: "https://via.placeholder.com/50",
      productType: "Ring",
      unit: 200,
      revenue: "40,000",
    },
    {
      image: "https://via.placeholder.com/50",
      productType: "Necklace",
      unit: 150,
      revenue: "60,000",
    },
    {
      image: "https://via.placeholder.com/50",
      productType: "Bangles",
      unit: 350,
      revenue: "17,500",
    },
    {
      image: "https://via.placeholder.com/50",
      productType: "Watch",
      unit: 100,
      revenue: "15,000",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Top Selling Products</h2>
        <button className="text-indigo-600 text-sm">View All</button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">

            Today
          </button>
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">

            Week
          </button>
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">

            Month
          </button>
          <button className="border border-black-200 text-gray-500 px-5 py-2 rounded-sm text-xl">

            Year
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Product Type</th>
              <th className="px-4 py-2 text-left">Units Sold</th>
              <th className="px-4 py-2 text-left  ">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.productType}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{product.productType}</td>
                <td className="px-4 py-2">{product.unit}</td>
                <td className="px-4 py-2 text-green-800">${product.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProducts;
