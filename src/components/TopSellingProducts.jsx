import React from "react";
import ring from '..//assets/Rings.png';
import necklace from '../assets/Necklace.png';
import bangles from '../assets/Bangles.png'
function TopSellingProducts() {
const products = [
  {
    image:  ring,
    productType: "Ring",
    unit: 200,
    revenue: "40,000",
  },
  {
    image:necklace,
    productType: "Necklace",
    unit: 150,
    revenue: "60,000",
  },
  {
    image: bangles,
    productType: "Bangles",
    unit: 350,
    revenue: "17,500",
  },
  {
    image: ring,
    productType: "Ring",
    unit: 200,
    revenue: "40,000",
  },
  {
    image:necklace,
    productType: "Necklace",
    unit: 150,
    revenue: "60,000",
  },
  
];


  return (
    <div className="bg-white rounded-xl w-[100%] h-[583px] p-6 ">
      <div className="flex items-center w-[100%] h-[10%] justify-between mb-6" style={{ borderBottom: '1px solid #EEEEEF' }}>
        <h2  className="text-lg font-semibold" style={{fontSize:'20px', fontWeight:'600', color:'#222526'}}>Top Selling Products</h2>
        <button className="text-indigo-600 text-sm" style={{fontSize:'13px', fontWeight:'400', color:'#52575B' , borderBottom: '1px solid #52575B '}}>View All</button>
      </div>
      <div className="flex items-center justify-between mb-4">
      <div className="flex gap-7">
                  <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7]" >
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
              <th className="px-4 py-5 text-left" style={{fontSize:'14px', fontWeight:'500', color:'#222526' }}>Image</th>
              <th className="px-4 py-5 text-left" style={{fontSize:'14px', fontWeight:'500', color:'#222526'}}>Product Type</th>
              <th className="px-4 py-5 text-left" style={{fontSize:'14px', fontWeight:'500', color:'#222526'}}>Units Sold</th>
              <th className="px-4 py-5 text-left " style={{fontSize:'14px', fontWeight:'500', color:'#222526'}}>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="px-[5%] py-5">
                  <img
                    src={product.image}
                    alt={product.productType}
                    className="w-[23px] h-[23px] object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2" style={{fontSize:'14px', fontWeight:'400', color:'#4B4F53'}}>{product.productType}</td>
                <td className="px-4 py-2"  style={{fontSize:'14px', fontWeight:'400', color:'#4B4F53'}}>{product.unit}</td>
                <td className="px-4 py-2 text-green-800"  style={{fontSize:'14px', fontWeight:'400', color:'#24983F'}}>${product.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProducts;
