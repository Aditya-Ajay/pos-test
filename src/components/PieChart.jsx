import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerAnalytics, setPeriod } from "../redux/Analytics/analyticsSlice"; // Import the thunk and action
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import upArrowIcon from '../assets/UpArrow.png';
import downArrowIcon from '../assets/downarrow.png';

import OverlappingDonutChart from './CurvedDonutChart';

const PieChartWithOverlap = () => {
  const dispatch = useDispatch();
  const { customerData, statusCustomerAnalytics, error, period } = useSelector((state) => state.analytics);

  // Dispatch the fetchCustomerAnalytics action on component mount or when period changes
  useEffect(() => {
    dispatch(fetchCustomerAnalytics(period));
  }, [dispatch, period]);

  // Handle period change button click
  const handlePeriodChange = (newPeriod) => {
    dispatch(setPeriod(newPeriod)); // Update the period in the state
  };
console.log('customerData',customerData)
  // Dummy data as a fallback, remove once real data is fetched
  const data = customerData?.newCustomers
    ? [
        { name: "New Customer", value: customerData.newCustomers.count,growthPercentage:customerData.newCustomers.growthPercentage ,color: "#302691" },
        { name: "Repeat Customer", value: customerData.repeatCustomers.count,growthPercentage:customerData.repeatCustomers.growthPercentage, color: "#FF6313" }
      ]
    : [
        { name: "New Customer", value: 400, color: "#302691" },
        { name: "Repeat Customer", value: 300, color: "#FF6313" }
      ];

//   if (statusCustomerAnalytics === "loading") return <div className="relative inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10  ">
//   <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500"></div>
// </div>  ;
  // if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div className=" w-[100%] h-[100%] gap-[24px] px-[16px] py-[24px]">
      <div className="flex justify-between">
        <div>
          <h4
            className="font-inter font-semibold"
            style={{ width: '100%', fontWeight: '600', height: '24px', fontSize: '20px' }}
          >
            Customer Analytics
          </h4>
        </div>
        <div className="flex gap-7">
          <button
            className={`border h-[25px] w-[58px] border-black-200 text-gray-500 rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7] ${period === 'daily' && 'border-[#5951A7] text-[#5951A7]'}`}
            onClick={() => handlePeriodChange('daily')}
          >
            Today
          </button>
          <button
            className={`border h-[25px] w-[58px] border-black-200 text-gray-500 rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7] ${period === 'weekly' && 'border-[#5951A7] text-[#5951A7]'}`}
            onClick={() => handlePeriodChange('weekly')}
          >
            Week
          </button>
          <button
            className={`border h-[25px] w-[58px] border-black-200 text-gray-500 rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7] ${period === 'monthly' && 'border-[#5951A7] text-[#5951A7]'}`}
            onClick={() => handlePeriodChange('monthly')}
          >
            Month
          </button>
          <button
            className={`border h-[25px] w-[58px] border-black-200 text-gray-500 rounded-sm text-[11px] font-[400] text-[#4B4F53] border hover:border-[#5951A7] ${period === 'yearly' && 'border-[#5951A7] text-[#5951A7]'}`}
            onClick={() => handlePeriodChange('yearly')}
          >
            Year
          </button>
        </div>
      </div>
  {statusCustomerAnalytics === "loading"?
   <div className="relative inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10  ">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500 mt-[100px]"></div> </div>: 
    <div className="flex mx-[5%] my-[40px] ml-[7%] justify-center h-[164px] w-[85%] gap-[64px]">
        <ResponsiveContainer>
          <OverlappingDonutChart />
        </ResponsiveContainer>
        <div className="flex justify-around items-start pt-[18px] gap-14">
          {data.map((entry, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <div className="w-[46px] h-[31px] font-semibold" style={{ textAlign: 'center', fontSize: '24px' }}>
                {entry.value}
              </div>
              <div className="w-[94px] h-[24px]" style={{ color: entry.color, textAlign: 'center', fontSize: '18px ', marginBottom: '14px' }}>
                {entry.name}
              </div>
              <div className="flex items-center gap-[4px] w-[69px]  l-[22px] p-[2px] rounded-sm" style={{ color: '#E8F6F8', justifyContent: 'center' }}>
              <div
  className={`flex items-center p-1 mt-1 ${
    entry.growthPercentage < 0 ? 'bg-red-100' : 'bg-green-100'
  }`}
>
  <img
    src={entry.growthPercentage < 0 ? downArrowIcon : upArrowIcon}
    alt={entry.growthPercentage < 0 ? "Down Arrow" : "Up Arrow"}
    className="mr-[7px]"
    style={{ 
      width: entry.growthPercentage < 0 ? '14 px' : '13px', 
      height: entry.growthPercentage < 0 ? '19px' : '14px' 
    }}  />
  <span
    className={entry.growthPercentage < 0 ? "text-red-900" : "text-green-900"}
    style={{
      color: entry.growthPercentage < 0 ? '#B91C1C' : '#1C7731',
      fontSize: '12px',
    }}
  >
    {entry.growthPercentage}%
  </span>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
       }
      
    </div>
  );
};

export default PieChartWithOverlap;
