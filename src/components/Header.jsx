import React from 'react'
import { FaSearch, FaCog, FaBell, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Header = ({ store, user }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center w-1/3">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <span className="text-gray-600 mr-2">Store:</span>
          <div className="flex items-center text-gray-800 font-medium">
            {store}
            <FaChevronDown className="ml-2 text-xs text-gray-500" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-primary">
            <FaCog />
          </button>
          <button className="text-gray-600 hover:text-primary relative">
            <FaBell />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
          </button>
          <button className="text-gray-600 hover:text-primary relative">
            <FaEnvelope />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">7</span>
          </button>
          
          <div className="flex items-center ml-4 cursor-pointer">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-gray-800 font-medium">{user.name}</span>
            <FaChevronDown className="ml-2 text-xs text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header