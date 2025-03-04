import React, { useState } from 'react'
import { FaChartPie, FaShoppingCart, FaUsers, FaBoxes, FaTruck, FaChartBar, FaChevronDown } from 'react-icons/fa'
import solis_pos from "../assets/solis_pos.png"

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState('Orders')

  const toggleMenu = (menu) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null)
    } else {
      setExpandedMenu(menu)
    }
  }

  return (
    <div className="w-60 bg-white h-full border-r border-gray-200 py-5 flex flex-col">
      <div className="px-5 mb-8">
        <div className="flex items-center">
       <img src={solis_pos} alt="logo_of_company" width={160} mb={10}/>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center px-5 py-3 text-primary bg-blue-50 border-l-4 border-primary cursor-pointer">
          <FaChartPie className="mr-3 text-lg" />
          <span>Dashboard</span>
        </div>
        
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer transition-all duration-300">
          <FaShoppingCart className="mr-3 text-lg" />
          <span>POS</span>
        </div>
        
        <div>
          <div 
            className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-300 ${expandedMenu === 'Orders' ? 'text-indigo-700 bg-indigo-50 border-l-4 border-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
            onClick={() => toggleMenu('Orders')}
          >
            <div className="flex items-center">
              <FaShoppingCart className="mr-3 text-lg" />
              <span>Orders</span>
            </div>
            <FaChevronDown className={`text-xs transition-transform duration-300 ${expandedMenu === 'Orders' ? 'transform rotate-180' : ''}`} />
          </div>
          
          {expandedMenu === 'Orders' && (
            <div className="bg-white pl-12 py-1">
              <div className="py-2 text-gray-600 hover:text-indigo-700 cursor-pointer">
                Sales
              </div>
              <div className="py-2 text-gray-600 hover:text-indigo-700 cursor-pointer">
                Returns
              </div>
              <div className="py-2 text-gray-600 hover:text-indigo-700 cursor-pointer">
                Repairs
              </div>
              <div className="py-2 text-gray-600 hover:text-indigo-700 cursor-pointer">
                Layaways
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer transition-all duration-300">
          <FaUsers className="mr-3 text-lg" />
          <span>Customers</span>
        </div>
        
        <div 
          className="flex items-center justify-between px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer transition-all duration-300"
          onClick={() => toggleMenu('Inventory')}
        >
          <div className="flex items-center">
            <FaBoxes className="mr-3 text-lg" />
            <span>Inventory</span>
          </div>
          <FaChevronDown className={`text-xs transition-transform duration-300 ${expandedMenu === 'Inventory' ? 'transform rotate-180' : ''}`} />
        </div>
        
        <div 
          className="flex items-center justify-between px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer transition-all duration-300"
          onClick={() => toggleMenu('Vendor')}
        >
          <div className="flex items-center">
            <FaTruck className="mr-3 text-lg" />
            <span>Vendor</span>
          </div>
          <FaChevronDown className={`text-xs transition-transform duration-300 ${expandedMenu === 'Vendor' ? 'transform rotate-180' : ''}`} />
        </div>
        
        <div 
          className="flex items-center justify-between px-5 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary cursor-pointer transition-all duration-300"
          onClick={() => toggleMenu('Reports')}
        >
          <div className="flex items-center">
            <FaChartBar className="mr-3 text-lg" />
            <span>Reports</span>
          </div>
          <FaChevronDown className={`text-xs transition-transform duration-300 ${expandedMenu === 'Reports' ? 'transform rotate-180' : ''}`} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar