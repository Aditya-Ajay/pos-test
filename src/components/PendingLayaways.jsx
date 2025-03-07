import React from "react";

function PendingLayaways() {
  const layaways = [
    {
      orderId: "ORD001",
      customer: "John Doe",
      billAmount: "500.00",
      dueAmount: "150.00",
    },
    {
      orderId: "ORD002",
      customer: "Jane Smith",
      billAmount: "750.00",
      dueAmount: "250.00",
    },
    {
      orderId: "ORD003",
      customer: "Alice Johnson",
      billAmount: "600.00",
      dueAmount: "200.00",
    },
    {
      orderId: "ORD004",
      customer: "Bob Williams",
      billAmount: "1,200.00",
      dueAmount: "400.00",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Pending Layaways</h2>
        <button className="text-indigo-600 text-sm">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Bill Amount</th>
              <th className="px-4 py-2 text-left">Due Amount</th>
            </tr>
          </thead>
          <tbody>
            {layaways.map((layaway, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{layaway.orderId}</td>
                <td className="px-4 py-2">{layaway.customer}</td>
                <td className="px-4 py-2">${layaway.billAmount}</td>
                <td className="px-4 py-2 text-green-800">${layaway.dueAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingLayaways;
