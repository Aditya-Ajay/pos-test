import { useState, useEffect } from 'react'
import { FaChartPie, FaShoppingCart, FaUsers, FaChartLine, FaBoxes, FaTruck, FaChartBar, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const [expandedMenu, setExpandedMenu] = useState(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [activeMenu, setActiveMenu] = useState('')
    const location = useLocation()

    const toggleMenu = (menu) => {
        setExpandedMenu(expandedMenu === menu ? null : menu)
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleMenuClick = (menu) => {
        setActiveMenu(menu)
        toggleMenu(menu)
    }

    useEffect(() => {
        if (location.pathname.includes('dashboard')) {
            setActiveMenu('Dashboard')
        } else if (location.pathname.includes('pos')) {
            setActiveMenu('POS')
        } else if (location.pathname.includes('sales')) {
            setActiveMenu('Sales')
        } else if (location.pathname.includes('customers')) {
            setActiveMenu('Customers')
        } else if (location.pathname.includes('inventory')) {
            setActiveMenu('Inventory')
        } else if (location.pathname.includes('vendor')) {
            setActiveMenu('Vendor')
        } else if (location.pathname.includes('reports')) {
            setActiveMenu('Reports')
        }
    }, [location])

    return (
        <div className={`transition-all  duration-300 ${isSidebarOpen ? 'w-[280px]' : 'w-20'} bg-white h-fill border-r border-gray-200 py-5 flex flex-col`}>
            <div className={`relative mb-8 ${isSidebarOpen ? "flex justify-end pr-5" : "flex justify-center"}`}>
                <button onClick={toggleSidebar} className="text-gray-700 text-xl focus:outline-none">
                    {isSidebarOpen ? <FaTimes className="transition-all" /> : <FaBars className="transition-all" />}
                </button>
            </div>

            <div className="flex flex-col ">
                {[{
                    name: 'Dashboard', icon: FaChartPie
                }, {
                    name: 'POS', icon: FaShoppingCart
                }, {
                    name: 'Sales', icon: FaChartLine
                }, {
                    name: 'Customers', icon: FaUsers
                }, {
                    name: 'Inventory', icon: FaBoxes
                }, {
                    name: 'Vendor', icon: FaTruck
                }, {
                    name: 'Reports', icon: FaChartBar
                }].map(({ name, icon: Icon }) => (
                    <div key={name} className={`flex items-center px-5 py-1 cursor-pointer transition-all duration-300 ${!isSidebarOpen ? "justify-center" : ""}`} onClick={() => handleMenuClick(name)}>
                        <div className={`flex items-center justify-between rounded-sm w-[232px] h-[44px] ${activeMenu === name ? 'bg-[#F7F6FB] text-[#2C2384] font-semibold' : 'text-gray-600 hover:bg-[#F7F6FB] hover:text-[#2C2384]'}`}>
                            <div className="flex items-center">
                                <Icon className="text-lg m-4" />
                                {isSidebarOpen && <span className={`ml-3 font-normal rounded-sm hover:font-semibold ${activeMenu === name ? 'font-semibold ' : ''}`}>{name}</span>}
                            </div>
                            {isSidebarOpen && ['Inventory', 'Vendor', 'Reports'].includes(name) && <FaChevronDown className={`text-xs transition-transform duration-300 ${expandedMenu === name ? 'rotate-180' : ''} mr-3`} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
