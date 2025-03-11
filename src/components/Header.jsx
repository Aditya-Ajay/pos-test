import React from "react";
import { Search, Bell, Settings, Mail } from 'lucide-react';
import logo from "../assets/solis_pos.png";
import profileIcon from '../assets/profile.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white  border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center flex-1 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 " style={{ width: '200px' }}>
            <img src={logo} alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="relative ml-[3rem] w-[450px] h-[40px]">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" style={{ color: '#4B4F53' }} />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-white-50 border border-[#EEEEEF] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              style={{ width: '75%' }}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Store Selector */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg w-[191px] !h-[40px] border border-[#EEEEEF]">
            <span className="text-gray-600" style={{ color: "#4B4F53", fontSize: "14px", fontWeight: "500" }}>
              Store:
            </span>
            <div className="relative flex-1 pl-2">
              <select
                className="bg-transparent border-none font-medium focus:outline-none cursor-pointer appearance-none w-full pr-6"
                style={{ color: "#4B4F53", fontSize: "14px", fontWeight: "500" }}
              >
                <option>J Galleria</option>
              </select>
              {/* Dropdown Arrow */}
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" stroke="#4B4F53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg" style={{ border: '1px solid #EEEEEF' }}>
              <Settings className="w-5 h-5 text-gray-600" style={{ color: '#4B4F53' }} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg" style={{ border: '1px solid #EEEEEF' }}>
              <Bell className="w-5 h-5 text-gray-600" style={{ color: '#4B4F53' }} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg" style={{ border: '1px solid #EEEEEF' }}>
              <Mail className="w-5 h-5 text-gray-600" style={{ color: '#4B4F53' }} />
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center justify-between bg-white p-3 rounded-lg w-[191px] !h-[40px] border border-[#EEEEEF]">
            <img src={profileIcon} alt="Profile Icon" className="h-8 w-8" />
            <div className="relative flex-1 pl-3">
              <select
                className="bg-transparent border-none font-medium focus:outline-none cursor-pointer appearance-none w-full pr-6"
                style={{ color: "#4B4F53", fontSize: "14px", fontWeight: "500" }}
              >
                <option>John Smith</option>
              </select>
              {/* Dropdown Arrow */}
              <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" stroke="#4B4F53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
