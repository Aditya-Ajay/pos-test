import React from 'react'
import { FaCalendarAlt, FaArrowUp, FaArrowDown, FaSort } from 'react-icons/fa'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'

const Dashboard= () => {
  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', sell: 400, return: 240, purchase: 240 },
    { name: 'Feb', sell: 300, return: 138, purchase: 221 },
    { name: 'Mar', sell: 200, return: 980, purchase: 229 },
    { name: 'Apr', sell: 278, return: 390, purchase: 200 },
    { name: 'May', sell: 189, return: 480, purchase: 218 },
    { name: 'Jun', sell: 239, return: 380, purchase: 250 },
    { name: 'Jul', sell: 349, return: 430, purchase: 210 },
    { name: 'Aug', sell: 349, return: 430, purchase: 210 },
    { name: 'Sep', sell: 349, return: 430, purchase: 210 },
    { name: 'Oct', sell: 349, return: 430, purchase: 210 },
    { name: 'Nov', sell: 349, return: 430, purchase: 210 },
    { name: 'Dec', sell: 349, return: 430, purchase: 210 },
  ]

  const customerData = [
    { name: 'Regular Customer', value: 400, color: '#6f42c1' },
    { name: 'Fresh Customers', value: 300, color: '#36b9cc' },
    { name: 'Total Customer Visits', value: 300, color: '#e0e0e0' },
  ]

  const topProducts = [
    { id: 1, image: 'https://via.placeholder.com/30x30/f6c23e/ffffff', type: 'Ring', unit: 148, revenue: 41800 },
    { id: 2, image: 'https://via.placeholder.com/30x30/e74a3b/ffffff', type: 'Necklace', unit: 48, revenue: 121800 },
    { id: 3, image: 'https://via.placeholder.com/30x30/36b9cc/ffffff', type: 'Bangles', unit: 64, revenue: 21800 },
    { id: 4, image: 'https://via.placeholder.com/30x30/f6c23e/ffffff', type: 'Ring', unit: 148, revenue: 41800 },
    { id: 5, image: 'https://via.placeholder.com/30x30/e74a3b/ffffff', type: 'Necklace', unit: 48, revenue: 121800 },
    { id: 6, image: 'https://via.placeholder.com/30x30/36b9cc/ffffff', type: 'Bangles', unit: 64, revenue: 21800 },
    { id: 7, image: 'https://via.placeholder.com/30x30/e74a3b/ffffff', type: 'Necklace', unit: 48, revenue: 121800 },
  ]

  const pendingLayaways = [
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
    { id: '#124236', customer: 'Raj Dhankar', billAmount: 41800, dueAmount: 41800 },
  ]

  const topCustomers = [
    { id: 1, name: 'Manoj Kumar', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', spent: 5299 },
    { id: 2, name: 'Manoj Kumar', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', spent: 5299 },
    { id: 3, name: 'Manoj Kumar', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', spent: 5299 },
    { id: 4, name: 'Manoj Kumar', avatar: 'https://randomuser.me/api/portraits/men/4.jpg', spent: 5299 },
    { id: 5, name: 'Manoj Kumar', avatar: 'https://randomuser.me/api/portraits/men/5.jpg', spent: 5299 },
  ]

  return (
    <div className="p-5">
      {/* Welcome Section */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Welcome Admin</h1>
          <p className="text-gray-600">You have <span className="text-primary font-medium">20+ Orders</span></p>
        </div>
        <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
          <span className="text-gray-600 mr-2">20/01/25 - 30/01/25</span>
          <FaCalendarAlt className="text-gray-500" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Total Revenue */}
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
            <span className="text-lg">$</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">$ 85,200</h3>
            <p className="text-success text-xs flex items-center">
              <FaArrowUp className="mr-1" /> +22%
            </p>
          </div>
        </div>

        {/* No. of Sales */}
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
            <span className="text-lg">#</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">No. of Sales</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">120</h3>
            <p className="text-danger text-xs flex items-center">
              <FaArrowDown className="mr-1" /> -10%
            </p>
          </div>
        </div>

        {/* Repair Amount */}
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center">
          <div className="w-10 h-10 rounded-lg bg-success flex items-center justify-center text-white mr-4">
            <span className="text-lg">$</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Repair Amount</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">$ 15,200</h3>
            <p className="text-success text-xs flex items-center">
              <FaArrowUp className="mr-1" /> +16%
            </p>
          </div>
        </div>

        {/* Walking Cust. */}
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center">
          <div className="w-10 h-10 rounded-lg bg-success flex items-center justify-center text-white mr-4">
            <span className="text-lg">#</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Walking Cust.</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">1,200</h3>
            <p className="text-success text-xs flex items-center">
              <FaArrowUp className="mr-1" /> +22%
            </p>
          </div>
        </div>

        {/* Product in QC */}
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center">
          <div className="w-10 h-10 rounded-lg bg-purple flex items-center justify-center text-white mr-4">
            <span className="text-lg">#</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Product in QC</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">40</h3>
            <p className="text-success text-xs flex items-center">
              <FaArrowUp className="mr-1" /> +22%
            </p>
          </div>
        </div>

        {/* Generated PO */}
        <div className="bg-white rounded-lg p-5 shadow-sm flex items-center">
          <div className="w-10 h-10 rounded-lg bg-purple flex items-center justify-center text-white mr-4">
            <span className="text-lg">#</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">Generated PO</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">24</h3>
            <p className="text-success text-xs flex items-center">
              <FaArrowUp className="mr-1" /> +18%
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Order Analytics */}
        <div className="col-span-2 bg-white rounded-lg p-5 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold text-gray-800">Order Analytics</h3>
            <div className="flex gap-4">
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400 mr-1"></div>
                <span className="text-xs text-gray-600">Sell</span>
              </div>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-danger mr-1"></div>
                <span className="text-xs text-gray-600">Return</span>
              </div>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-info mr-1"></div>
                <span className="text-xs text-gray-600">Purchase</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="sell" stroke="#6c757d" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="return" stroke="#e74a3b" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="purchase" stroke="#36b9cc" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Analytics */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-5">Customer Analytics</h3>
          
          <div className="h-48 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {customerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            {customerData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        {/* Top Selling Products */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Top Selling Products</h3>
            <span className="text-primary text-sm cursor-pointer">View All</span>
          </div>
          
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">Image</th>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">Product Type</th>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">Unit</th>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id}>
                  <td className="py-3">
                    <img src={product.image} alt={product.type} className="w-8 h-8 rounded object-cover" />
                  </td>
                  <td className="py-3 text-gray-800">{product.type}</td>
                  <td className="py-3 text-gray-800">{product.unit}</td>
                  <td className="py-3 text-success font-medium">$ {product.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pending Layaways */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Pending Layaways</h3>
            <span className="text-primary text-sm cursor-pointer">View All</span>
          </div>
          
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">
                  Order ID <FaSort className="inline ml-1 text-xs" />
                </th>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">
                  Customer <FaSort className="inline ml-1 text-xs" />
                </th>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">
                  Bill Amount <FaSort className="inline ml-1 text-xs" />
                </th>
                <th className="text-left py-3 text-gray-600 font-medium text-sm">
                  Due Amount <FaSort className="inline ml-1 text-xs" />
                </th>
              </tr>
            </thead>
            <tbody>
              {pendingLayaways.map((order, index) => (
                <tr key={index}>
                  <td className="py-3">
                    <span className="bg-blue-50 text-primary text-xs py-1 px-2 rounded">{order.id}</span>
                  </td>
                  <td className="py-3 text-gray-800">{order.customer}</td>
                  <td className="py-3 text-gray-800">$ {order.billAmount.toLocaleString()}</td>
                  <td className="py-3 text-gray-800">$ {order.dueAmount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Customers */}
      <div className="bg-white rounded-lg p-5 shadow-sm mb-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Top Customers</h3>
          <span className="text-primary text-sm cursor-pointer">View All</span>
        </div>
        
        <div className="space-y-4">
          {topCustomers.map((customer) => (
            <div key={customer.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-gray-800">{customer.name}</span>
              </div>
              <span className="font-medium">$ {customer.spent.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard