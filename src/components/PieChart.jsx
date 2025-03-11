import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import upArrowIcon from '../assets/UpArrow.png'
import OverlappingDonutChart from './CurvedDonutChart';
const data = [
  { name: "First Time", value: 400, color: "#302691" },
  { name: "Repeat", value: 300, color: "#FF6313" }
];

const PieChartWithOverlap = () => {
  return (
    <div className=" w-[100%] h-[100%] gap-[24px] px-[16px] py-[24px]">
      <div className="flex justify-between">
        <div>
          <h4
            className="font-inter font-semibold  "
            style={{ width: '100%', fontWeight: '600', height: '24px', fontSize: '20px' }}
          >
            Customer Analytics
          </h4>        </div>
        <div className="flex gap-2">
          <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm " >
           Today</button>
           <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm " >
           Week</button>
           <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm " >
           Month</button>
           <button className="border h-[25px] w-[58px] border-black-200 text-gray-500  rounded-sm " >
           Year</button>
        </div>
      </div>

      <div className="flex  mx-[5%] my-[40px] ml-[7%] justify-center h-[164px] w-[85%] gap-[64px]">
        <ResponsiveContainer >
          <OverlappingDonutChart/>
        </ResponsiveContainer>
        <div className="flex justify-around items-start pt-[18px]">
          {data.map((entry, index) => (
            <div key={index} className="flex flex-col items-center gap-5 ">
              <div className="w-[46px] h-[31px] font-semibold" style={{ textAlign: 'center' }}>{entry.value}</div>
              <div className="w-[94px] h-[24px]" style={{ color: entry.color, textAlign: 'center' }}>
              {entry.name}
              </div>
               <div className="flex items-center gap-[4px] w-[65px]  l-[22px] p-[2px] rounded-sm" style={{ color: '#E8F6F8' ,justifyContent:'center'}}>
                      <div className="flex items-center  bg-green-100 p-1 mt-1 ">
                        <img
                          src={upArrowIcon}
                          alt="Up Arrow"
                          className="mr-[7px]"
                          style={{ width: '13px', height: '14px', color: '#1C7731' }}
                        />
                        <span className="text-green-900 " style={{ color: '#1C7731', fontSize: '12px' }}>+22%</span>
                      </div>
                     
                    </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default PieChartWithOverlap;
