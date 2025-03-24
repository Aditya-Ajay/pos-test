import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnalytics } from "../redux/Analytics/AnalyticsSlice";

function TopSellingProducts() {
  const dispatch = useDispatch();
  const { data, statusAnalytics } = useSelector((state) => state.analytics);
  console.log(data,'panda')

  const [period, setPeriod] = useState("daily");

  useEffect(() => {
    dispatch(fetchAnalytics({ period, limit: 5 }));
  }, [dispatch, period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div className="bg-white rounded-xl w-[100%] h-[583px] p-6">
      <div className="flex items-center w-[100%] h-[10%] justify-between mb-6" style={{ borderBottom: '1px solid #EEEEEF' }}>
        <h2 className="text-lg font-semibold" style={{ fontSize: '20px', fontWeight: '600', color: '#222526' }}>Top Selling Products</h2>
        <div className="flex items-center justify-between mb-4">
        <div className="flex gap-7">
          {['daily', 'weekly', 'monthly', 'yearly'].map((p) => (
            <button
              key={p}
              className={`border h-[25px] w-[58px] rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7] ${period === p ? 'border-[#5951A7]' : ''}`}
              onClick={() => handlePeriodChange(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>
      </div>
      
      <div className="overflow-x-auto ">
        {statusAnalytics==='loading' ? (
         <div className="relative mt-[200px] inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10" style={{overflow:'hidden'}}>
         <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500"></div>
       </div>
              ) : (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-5 text-left" style={{ fontSize: '14px', fontWeight: '500', color: '#222526' }}>Image</th>
                <th className="px-4 py-5 text-left" style={{ fontSize: '14px', fontWeight: '500', color: '#222526' }}>Product Type</th>
                <th className="px-4 py-5 text-left" style={{ fontSize: '14px', fontWeight: '500', color: '#222526' }}>Units Sold</th>
                <th className="px-4 py-5 text-left" style={{ fontSize: '14px', fontWeight: '500', color: '#222526' }}>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="px-[5%] py-5">
                    <img
                      src={product.categoryImage}
                      alt={product.category}
                      className="w-[23px] h-[23px] object-cover rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2" style={{ fontSize: '14px', fontWeight: '400', color: '#4B4F53' }}>{product.category}</td>
                  <td className="px-4 py-2" style={{ fontSize: '14px', fontWeight: '400', color: '#4B4F53' }}>{product.totalUnitsSold}</td>
                  <td className="px-4 py-2 text-green-800" style={{ fontSize: '14px', fontWeight: '400', color: '#24983F' }}>${product.totalRevenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TopSellingProducts;
