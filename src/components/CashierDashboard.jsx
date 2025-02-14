import React, { useState  , useRef} from 'react';
import { Search, Bell, Settings, ChevronDown, Mail, UserCircle2, Scan } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/solis_pos.png"
import scanner from "../assets/scanner.png"
import CustomerInformation from './CustomerInformation';
import {fetchProductById} from '../redux/Product/ProductSlice'
const BASE_URL = import.meta.env.VITE_BASE_URL




function App() {
  const products = useSelector((state)=>state?.product?.products)
  console.log(products)
  const dispatch = useDispatch()
  const [open , setOpen] = useState(false)

const handleDelete = (id)=>{
  dispatch(removeProduct(id))
}



const handleChange =(e) => {
  const value = e.target.value;
  var length = Math.log(value) * Math.LOG10E + 1 | 0;
  console.log(length)
  console.log("Input value:", value); // Log the input value
  if (length == 9) {
    console.log("Dispatching fetchProductById"); // Log before dispatching
    const action  = dispatch(fetchProductById(value))
    console.log(action)
 
  }
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <img src={logo} alt="Logo" className="w-22 h-12" />
            
          </div>
          <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
              <span>Store: Jewels Galleria</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 border  px-2 py-2 rounded-sm  ">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=32&h=32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span>John Smith</span>
            </div>
          </div>
        </div>
      </header>
      {open ? <CustomerInformation open={open} setOpen={setOpen}/> : null}

      {/* Main Content */}
      <div className='bg-white shadow-sm mt-6 mx-auto pt-2 pb-0.1 pl-2 pr-2 max-w-7xl' >
        <div className="flex justify-between items-center mb-6 py-2">
          <button className="bg-[#5542BA] text-white px-6 py-2 rounded-sm">
            View Orders
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-white">
              <span>23 Dec</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Mail className="h-6 w-6 text-gray-600" />
            <Bell className="h-6 w-6 text-gray-600" />
            <Settings className="h-6 w-6 text-gray-600" />
          </div>
          </div>
        </div>
    
      <main className="max-w-7xl mx-auto px-4 ">
      

        <div className="flex gap-6">
          <div className="flex-1">
            <div className="flex gap-3 mb-6">
              <button className="px-4 py-2 border border-[#5542BA] text-[#5542BA] bg-white rounded-lg">
                Create Orders
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg">
                Add Returns
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg">
                Repair Order
              </button>
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg">
                Custom
              </button>
              <div className="flex-1" />
              <button className="px-4 py-2 bg-[#5542BA] text-white rounded-lg">
                + Add Layaways
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6 px-2" style={{backgroundColor : "#f8f8fc"}}>
                <div className="p-4 bg-gray-50 rounded-lg" >
              <img src={scanner} alt="" />
                </div>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Search By Product Code/Name"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <table className="w-full">
                <thead className="bg-gray" style={{backgroundColor : "#FFF9EB"}}>
                  <tr>
                    <th className="text-left p-4">Image</th>
                    <th className="text-left p-4">#</th>
                    <th className="text-left p-4">Product Code</th>
                    <th className="text-left p-4">Product Type</th>
                    <th className="text-left p-4">Price</th>
                    <th className="text-left p-4">Qty</th>
                    <th className="text-left p-4">Sub Total</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product?._id} className="border-t">
                      <td className="p-4">
                        <img
                          src={product.images}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      </td>
                      <td className="p-4">{product?._id}</td>
                      <td className="p-4">{product?.barcode}</td>
                      <td className="p-4">{product?.name}</td>
                      <td className="p-4">{product?.currentPrice}</td>
                      <td className="p-4">1</td>
                      <td className="p-4">{product?.currentPrice}</td>
                      <td className="p-4 text-red-500">×</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-100 ">
            <div className="bg-white px-8 pt-2 rounded-lg shadow-sm pb-8">
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              <p className="text-gray-500 text-sm mb-6">Transaction ID #1982761892</p>

              <div className="flex items-center gap-2 mb-6">
                <input
                  type="text"
                  placeholder="+ Add Phone Number"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg"
                  onClick={()=>setOpen(!open)}
                />
               
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Actual Amount:</span>
                  <span>$ 1.25</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Discount:</span>
                  <input
                    type="text"
                    placeholder="0%"
                    className="w-20 px-2 py-1 border border-gray-200 rounded"
                  />
                  <span>Or</span>
                  <input
                    type="text"
                    placeholder="$ 0.000"
                    className="w-24 px-2 py-1 border border-gray-200 rounded"
                  />
                  <button style={{color : '#5542BA'}}>Apply</button>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>$ 0.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Grand Total:</span>
                  <span>$ 350.45</span>
                </div>
              </div>

              <button className="w-full text-center py-3  text-purple-600 rounded-sm mb-4"  style={{background : 'rgba(240, 240, 254, 1)' , color : '#5542BA'}}>
                + Add Exchange
              </button>

              <div className="text-center mb-4 p-4 " style={{background : 'rgba(240, 240, 254, 0.35)'}}>
                <div className="text-sm text-gray-500">Amount Payable</div>
                <div className="text-2xl font-bold">$ 350.45</div>
              </div>

              <button className="w-full mt-5 py-3 bg-green-100 text-green-600 rounded-sm">
                Confirm Order →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;