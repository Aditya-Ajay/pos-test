import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPendingLayaways } from "../redux/Layaways/LayawaysSlice"; 

function PendingLayaways() {
  const dispatch = useDispatch();
  const { pendingLayaways, pending, error } = useSelector((state) => state.layaways);

  useEffect(() => {
    dispatch(fetchPendingLayaways(4)); // Fetch with a limit of 4
  }, []);

  return (
    <div className="bg-white rounded-xl w-[100%] h-[583px] p-6">
      <div className="flex items-center justify-between mb-[5%] h-[13%]" style={{ borderBottom: '1px solid #EEEEEF' }}>
        <h2 className="text-lg font-semibold" style={{ fontSize: '20px', fontWeight: '600', color: '#222526' }}>Receivable</h2>
        <button className="text-indigo-600 text-sm" style={{ fontSize: '13px', fontWeight: '400', color: '#52575B', borderBottom: '1px solid #52575B ' }}>
          View All
        </button>
      </div>

      {/* <div className="flex items-center justify-between mb-4">
        <div className="flex gap-7">
          {["Today", "Week", "Month", "Year"].map((period) => (
            <button key={period} className="border h-[25px] w-[58px] border-black-200 text-gray-500 rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7]">
              {period}
            </button>
          ))}
        </div>
      </div> */}

      {pending ? (
        <div className="relative inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10 mt-[200px]  ">
  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500"></div>
</div>      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-5 text-left" style={{ fontSize: "14px", fontWeight: "500", color: "#222526" }}>Order ID</th>
                <th className="px-4 py-5 text-left" style={{ fontSize: "14px", fontWeight: "500", color: "#222526" }}>Customer</th>
                <th className="px-4 py-5 text-left" style={{ fontSize: "14px", fontWeight: "500", color: "#222526" }}>Due Amount</th>
                <th className="px-4 py-5 text-left" style={{ fontSize: "14px", fontWeight: "500", color: "#222526" }}>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {pendingLayaways.map((layaway, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">
                    <span className="w-[75px] h-[25px] bg-[#E8F6F8]" style={{ fontSize: "14px", fontWeight: "400", color: "#4B4F53" }}>
                      {layaway.orderId}
                    </span>
                  </td>
                  <td className="px-4 py-2" style={{ fontSize: "14px", fontWeight: "400", color: "#4B4F53" }}>
                    {layaway.customerName}
                  </td>
                  <td className="px-4 py-2" style={{ fontSize: "14px", fontWeight: "400", color: "#4B4F53" }}>
                    ${layaway.nextPaymentAmount}
                  </td>
                  <td className="px-4 py-2 text-green-800" style={{ fontSize: "14px", fontWeight: "400", color: "#4B4F53" }}>
                    {new Date(layaway.nextPaymentDueDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PendingLayaways;
