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
    <div className="bg-white rounded-xl w-[100%]  h-[583px] p-6 ">
     <div className="flex items-center w-[100%] h-[10%] justify-between mb-6" style={{ borderBottom: '1px solid #EEEEEF' }}>
        <h2  className="text-lg font-semibold" style={{fontSize:'20px', fontWeight:'600', color:'#222526'}}>Pending Layaways</h2>
        <button className="text-indigo-600 text-sm" style={{fontSize:'13px', fontWeight:'400', color:'#52575B' , borderBottom: '1px solid #52575B '}}>View All</button>
      </div>
      <div className="flex items-center justify-between mb-4">
      <div className="flex gap-2">
                  <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7]"  >
                    Today</button>
                  <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7]" >
                    Week</button>
                  <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7]" >
                    Month</button>
                  <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7]" >
                    Year</button>
                </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead >
            <tr >
              <th className="px-4 py-5 text-left" style={{fontSize:'14px', fontWeight:'500', color:'#222526' }}>Order ID</th>
              <th className="px-4 py-5 text-left" style={{fontSize:'14px', fontWeight:'500', color:'#222526'}}>Customer</th>
              <th className="px-4 py-5 text-left" style={{fontSize:'14px', fontWeight:'500', color:'#222526'}}>Bill Amount</th>
              <th className="px-4 py-5 text-left " style={{fontSize:'14px', fontWeight:'500', color:'#222526'}}>Due Amount</th>
            </tr>
          </thead>
          <tbody>
            {layaways.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2  "><span className="w-[75px] h-[25px] bg-[#E8F6F8]"  style={{fontSize:'14px', fontWeight:'400', color:'#4B4F53' }}>{product.orderId}</span></td>
                <td className="px-4 py-2" style={{fontSize:'14px', fontWeight:'400', color:'#4B4F53'}}>{product.customer}</td>
                <td className="px-4 py-2"  style={{fontSize:'14px', fontWeight:'400', color:'#4B4F53'}}>{product.billAmount}</td>
                <td className="px-4 py-2 text-green-800"  style={{fontSize:'14px', fontWeight:'400', color:'#4B4F53'}}>${product.dueAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingLayaways;
