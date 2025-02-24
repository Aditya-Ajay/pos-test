import React from 'react';
import { Mail, Bell, UserCircle, BarChart3, ClipboardList, Users, Package, TruckIcon, PieChart, ChevronRight, PlusCircle, Clock, RotateCcw, Menu } from 'lucide-react';
import logo from "../assets/solis_pos.png";

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen p-6">
      <div className="mb-10">
        <img src={logo} alt="Solis POS" className="h-8" />
      </div>
      
      <nav className="space-y-1">
        <div className="bg-indigo-600 text-white px-4 py-3 rounded-lg mb-4">
          <button className="flex items-center w-full">
            <PlusCircle className="h-5 w-5 mr-3" />
            <span>Create Orders</span>
          </button>
        </div>
        
        {[
          { icon: BarChart3, label: 'Dashboard', active: true },
          { icon: ClipboardList, label: 'Orders' },
          { icon: Users, label: 'Customer' },
          { icon: Package, label: 'Inventory' },
          { icon: TruckIcon, label: 'Vendors' },
          { icon: PieChart, label: 'Reports' },
        ].map((item, index) => (
          <button
            key={index}
            className={`flex items-center w-full px-4 py-3 rounded-lg ${
              item.active ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </button>
        ))}
      </nav>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, subValue, trend }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-indigo-50 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        {trend && (
          <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-gray-500 text-sm">{label}</h3>
        <p className="text-2xl font-semibold">{value}</p>
        {subValue && (
          <div className="text-xs text-gray-400">
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
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Mail className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium">John Smith</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={BarChart3}
            label="Total Revenue"
            value="$ 85,200"
            subValue="534 Orders"
            trend={10.5}
          />
          <StatCard
            icon={Users}
            label="Total Customers"
            value="100"
            trend={9.5}
          />
          <StatCard
            icon={Clock}
            label="Layaways"
            value="$ 15,200"
            subValue="5 Pending"
          />
          <StatCard
            icon={RotateCcw}
            label="Repair"
            value="$ 85,200"
            subValue="22 Completed"
          />
          <StatCard
            icon={RotateCcw}
            label="Returns"
            value="$ 8,200"
            subValue="4 Returned"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-6">Order Analytics</h2>
            <div className="h-64 bg-gray-50 rounded-lg"></div>
          </div>

          <TopCustomers />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
