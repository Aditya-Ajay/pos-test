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

function StatCard({ icon: Icon, label, value, subValue, trend }) {
  return (
    <div className="bg-white  rounded-lg w-[100%] h-[119px] p-[12px] ">
      <div className="flex items-center " style={{justifyContent:'space-between'}}>
        <div className=" bg-white-50 rounded-lg">
          <h3 className="text-gray-500 text-lg" style={{ color: '#4B4F53', fontSize: '14px', fontWeight: '400' }}>{label}</h3>
        </div>
        {/* Render image icon */}
        <div className="h-8 w-8 bg-grey-800">
          {typeof Icon === 'string' ? (
            <img src={Icon} alt={`${label} Icon`} className="h-8 w-8" />
          ) : (
            <Icon className="h-[32px] w-[32px] p-[6px] bg-grey-800 text-indigo-600" style={{ background: '#EEEEEF', border: '1px solid #ECF0F3', borderRadius: '4px' }} />
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
  const customers = [
    { name: 'Manoj Kumar', amount: '5,299' },
    { name: 'Satish Singh', amount: '4,999' },
    { name: 'Kamla David', amount: '4,678' },
    { name: 'Rajkumari Dev', amount: '4,198' },
    { name: 'Anna Winston', amount: '4,000' },
    { name: 'Trilok Kumar', amount: '3,881' },
    { name: 'Akira Bhuvan', amount: '3,672' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Top Customers</h2>
        <button className="text-indigo-600 text-sm">View All</button>
      </div>
      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <UserCircle className="h-5 w-5 text-indigo-600" />
              </div>
              <span className="text-sm">{customer.name}</span>
            </div>
            <span className="text-sm font-medium">$ {customer.amount}</span>
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
    <div className="flex bg-gray-50 w-full h-[100rem] overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl w-[157px] h-[24px] my-[7px] font-semibold" style={{ fontSize: "20px", fontWeight: '600', color: '#222526' }}>Welcome Admin</h1>
            <p className="text-gray-500  w-[180px] h-[17px]" style={{ fontSize: '14px', fontWeight: '500', color: '#4B4F53' }}>You have <span style={{ color: '#FF6316' }}>20 Orders,</span> Today</p>
          </div>


        </div>
        <div className="w-fill  border-r h-[262px]  flex">
  {/* Left Section with Stats */}
  <div className="w-[42%] bg-gray-50  pl-0  grid grid-cols-2 gap-6 ml-0">
    <StatCard
      icon={moneyBagIcon}
      label="Total Revenue"
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
      value="$ 15,200"
      subValue="From last day"
    />
  </div>

  {/* Right Section with Pie Chart */}
  <div className="w-[42%] bg-white ml-[24px] h-[260px] rounded-lg shadow-md flex justify-center items-center gap-[64px]">
      <PieChartWithPaddingAngle />
  </div>
</div>




        {/* <div className="grid grid-cols-3 h-[55vh] gap-6">
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold mr-6">Revenue Analytics</h4>
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
            <div className="h-64 bg-white-50 rounded-lg">
              <SimpleAreaChart />
            </div>
          </div>

          <TopCustomers />

        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-1/2">
            <TopSellingProducts />

          </div>
          <div className="w-1/2">
            <PendingLayaways />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default AdminDashboard