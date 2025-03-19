import { User, UserCircle } from 'lucide-react';
import PieChartWithPaddingAngle from './PieChart'
import TopSellingProducts from './TopSellingProducts';
import PendingLayaways from './PendingLayaways';
import SimpleAreaChart from './SimpleAreaCharts';
import moneyBagIcon from '../assets/money-bag_svgrepo.com.png'; // Update the path if necessary
import productIcon from '../assets/product.png'; // Update the path if necessary
import Sidebar from './Sidebar';
import { useState } from 'react';
import upArrowIcon from '../assets/UpArrow.png'
import profileIcon from '../assets/profile.png';
import profitIcon from '../assets/profit.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTopCustomers } from '../redux/Customer/CustomerSlice'
function StatCard({ icon: Icon, label, value, subValue, trend }) {
  return (
    <div className="bg-white  rounded-lg w-[100%] h-[119px] p-[12px] " style={{ border: '1px solid #EEEEEF' }}>
   

      <div className="flex items-center " style={{ justifyContent: 'space-between' }}>
        <div className=" bg-white-50 rounded-lg">
          <h3 className="text-gray-500 text-lg" style={{ color: '#4B4F53', fontSize: '14px', fontWeight: '400' }}>{label}</h3>
        </div>
        {/* Render image icon */}
        <div className="h-8 w-8 bg-grey-800">
          {typeof Icon === 'string' ? (
            <img src={Icon} alt={`${label} Icon`} className="h-8 w-8" />
          ) : (
            <Icon className="h-[32px] w-[32px] p-[6px] bg-grey-800 text-indigo-600" style={{background: '#EEEEEF', border: '1px solid #ECF0F3', borderRadius: '4px' }} />
          )}
        </div>
      </div>

      <div className=" bg-white-50 border-b " style={{ borderBottom: '1px solid #EEEEEF' }}>
        <p className="text-xl font-semibold" style={{ color: '#222526', fontSize: '20px', fontWeight: '600' }}>{value}</p>
      </div>

      <div className="flex items-center gap-[4px]  l-[20px] p-[2px] rounded-sm" style={{ color: '#E8F6F8' }}>
        <div className="flex items-center  bg-green-100 p-1 mt-1 w-16">
          <img
            src={upArrowIcon}
            alt="Up Arrow"
            className="mr-[7px]"
            style={{ width: '13px', height: '14px', color: '#1C7731' }}
          />
          <span className="text-green-900 " style={{ color: '#1C7731', fontSize: '14px' }}>+22%</span>
        </div>
        {subValue && (
          <div className="text-xs  mt-1" style={{ color: '#4B4F53' }}>
            {subValue}
          </div>
        )}
      </div>
    </div>
  );
}

function TopCustomers() {
  const dispatch = useDispatch();
  const { topCustomers, loading, error } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(fetchTopCustomers()); // Dispatch the async thunk to fetch data
  }, []);
console.log(topCustomers,'customer')
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white w-[100%] h-[100%] py-[3%] px-[5%]">
      <div className="flex items-center justify-between mb-[5%] h-[13%]" style={{ borderBottom: '1px solid #EEEEEF' }}>
        <h2 className="text-lg font-semibold" style={{ fontSize: '20px', fontWeight: '600', color: '#222526' }}>Top Customers</h2>
        <button className="text-indigo-600 text-sm" style={{ fontSize: '13px', fontWeight: '400', color: '#52575B', borderBottom: '1px solid #52575B ' }}>
          View All
        </button>
      </div>
      <div className="space-y-4">
        {topCustomers && topCustomers.map((customer, index) => (
          <div key={index} className="flex items-center justify-between" style={{ borderBottom: '1px solid #EEEEEF' }}>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <img src={profileIcon} alt="Profile Icon" className="h-7 w-7" />
              </div>
              <span className="text-sm" style={{ fontSize: '14px', fontWeight: '400', color: '#4B4F53' }}>{customer.name}</span>
            </div>
            <span className="text-sm font-medium" style={{ fontSize: '14px', fontWeight: '600', color: '#222526' }}>${customer.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [store, setStore] = useState('J Galleria')
  const [user, setUser] = useState({
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  })

  return (
    <div className="flex bg-gray-50 w-full h-[105rem] overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-[2%] pl-[3%]">
        <div className="flex items-center justify-between mb-[3%]">
          <div>
            <h1 className="text-2xl w-[157px] h-[24px] my-[7px] font-semibold" style={{ fontSize: "20px", fontWeight: '600', color: '#222526' }}>Welcome Admin</h1>
            <p className="text-gray-500  w-[180px] h-[17px]" style={{ fontSize: '14px', fontWeight: '500', color: '#4B4F53' }}>You have <span style={{ color: '#FF6316' }}>20 Orders,</span> Today</p>
          </div>


        </div>
        <div className="w-[100%]  border-r h-[262px]  flex">
          {/* Left Section with Stats */}
          <div className="w-[46%] bg-gray-50  pl-0  grid grid-cols-2 gap-14 ml-0">
            <StatCard
              icon={moneyBagIcon}
              label="Profit"
              value="$ 85,200"
              subValue="From last day"
              trend={10.5}
            />
            <StatCard
              icon={User}
              label="Total Customers"
              value="100"
              subValue="From last day"
              trend={9.5}
            />
            <StatCard
              icon={productIcon}
              label="Total Sold Products"
              value="20"
              subValue="From last day"
            />
            <StatCard
              icon={productIcon}
              label="Total Repair Product"
              value=" 200"
              subValue="From last day"
            />
          </div>

          {/* Right Section with Pie Chart */}
          <div className="w-[45%] bg-white ml-[5%] h-[293px] rounded-lg  flex justify-center items-center gap-[64px]" style={{ border: '1px solid #EEEEEF' }}>
            <PieChartWithPaddingAngle />
          </div>
        </div>

        <div className="w-[100%]  my-[6%] border-r h-[412px]  flex">
        <div className="w-[46%] bg-gray-50  pl-0  grid  gap-14 ml-0">
        <TopSellingProducts />

          </div>
          <div className="w-[45%] bg-gray-50  pl-0  grid  gap-14 ml-[5%]">
          <PendingLayaways />
          </div>
        </div>





        <div className="w-[100%]   my-[15%] border-r h-[412px]  flex ">
        <div className="w-[62%] bg-white  h-[100%] rounded-lg  flex justify-center items-center gap-[64px]" style={{ border: '1px solid #EEEEEF' }}>
            <div className=" w-[100%] h-[100%] gap-[24px] px-[16px] py-[24px]">
              <div className="flex justify-between">
                <div>
                  <h4
                    className="font-inter font-semibold  "
                    style={{ width: '100%', fontWeight: '600', height: '24px', fontSize: '20px' }}
                  >
                    Revenue Analytics
                  </h4>        </div>
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
              <SimpleAreaChart />
            </div>
          </div>
          <div className="w-[29%] bg-white ml-[5%] h-[100%] rounded-lg  flex justify-center items-center gap-[64px]" style={{ border: '1px solid #EEEEEF' }}>
            <TopCustomers />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard