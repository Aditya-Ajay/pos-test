import { User, UserCircle } from 'lucide-react';
import PieChartWithPaddingAngle from './PieChart'
import TopSellingProducts from './TopSellingProducts';
import PendingLayaways from './PendingLayaways';
import SimpleAreaChart from './SimpleAreaCharts';
import moneyBagIcon from '../assets/money-bag_svgrepo.com.png'; // Update the path if necessary
import productIcon from '../assets/product.png'; // Update the path if necessary
import Sidebar from './Sidebar';


function StatCard({ icon: Icon, label, value, subValue, trend }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-5 ml-0">
      <div className="flex items-center justify-between">
        <div className="p-1 bg-white-50 rounded-lg">
          <h3 className="text-gray-500 text-lg">{label}</h3>
        </div>
        {/* Render image icon */}
        <div className="h-8 w-8 bg-grey-800">
          {typeof Icon === 'string' ? (
            <img src={Icon} alt={`${label} Icon`} className="h-8 w-8" />
          ) : (
            <Icon className="h-8 w-8 bg-grey-800 text-indigo-600" />
          )}
        </div>
      </div>

      <div className="p-1 bg-white-50 border-b border-gray-300">
        <p className="text-xl font-semibold">{value}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-green-100 p-1 mt-1 w-16">
          <span className="text-green-900 text-xs">↑</span>
          <span className="text-green-900 text-xs">+22%</span>
        </div>
        {subValue && (
          <div className="text-xs text-gray-400 mt-1">
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
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Hello Smith !</h1>
            <p className="text-gray-500">Let's create orders</p>
          </div>

    
        </div>
        <div className="w-full bg-gray-50 border-r h-[45vh] pr-4 flex">
          <div className="w-1/2 bg-gray-50 p-3 pl-0 h-full grid grid-cols-2 ml-0 ">
            <StatCard
              icon={moneyBagIcon}    
              label="Total Revenue"
              value="$ 85,200"
              subValue="534 Orders"
              trend={10.5}
            />
            
            <StatCard
              icon={User}
              label="Total Customers"
              value="$ 100"
              trend={9.5}
            />
            <StatCard
              icon={productIcon}
              label="Layaways"
              value="$ 15,200"
              subValue="5 Pending"
            />
            <StatCard
              icon={productIcon}
              label="Repair"
              value="$ 85,200"
              subValue="22 Completed"
            />
          </div>
          <div className="w-1/2 bg-white mt-[2rem] h-[38vh] rounded-lg shadow-md flex justify-center items-center">
            <div className=" h-2/3 w-[90%]">
              <PieChartWithPaddingAngle />
            </div>
          </div>
        </div>



        <div className="grid grid-cols-3 h-[55vh] gap-6">
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
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
