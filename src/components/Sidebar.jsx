import { useState, useEffect } from 'react'
import { FaChartPie, FaShoppingCart, FaUsers, FaChartLine, FaBoxes, FaTruck, FaChartBar, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({activemenu}) => {
    const [expandedMenu, setExpandedMenu] = useState(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [activeMenu, setActiveMenu] = useState(activemenu)
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
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[300px]' : 'w-20'} bg-white h-fill border-r border-gray-200 py-5 flex flex-col`}>
            <div className={`relative mb-8 ${isSidebarOpen ? "flex justify-end pr-5" : "flex justify-center"}`}>
                <button onClick={toggleSidebar} className="text-gray-700 text-xl focus:outline-none">
                    {isSidebarOpen ? <FaTimes className="transition-all" /> : <FaBars className="transition-all" />}
                </button>
            </div>

            <div className="flex flex-col">
                {[
                    { name: 'Dashboard', icon: FaChartPie, path: '/admin-dashboard', submenu: [] },
                    { name: 'POS', icon: FaShoppingCart, path: '/admin-dashboard/pos', submenu: [] },
                    { name: 'Sales', icon: FaChartLine, path: '/admin-dashboard/sales', submenu: [] },
                    { name: 'Customers', icon: FaUsers, path: '/admin-dashboard/customers', submenu: [] },
                    { name: 'Inventory', icon: FaBoxes, path: '/admin-dashboard/inventory', submenu: ['Products', 'Stock', 'Orders'] },
                    { name: 'Vendor', icon: FaTruck, path: '/admin-dashboard/vendor', submenu: ['Suppliers', 'Purchases'] },
                    { name: 'Reports', icon: FaChartBar, path: '/admin-dashboard/reports', submenu: ['Sales Report', 'Inventory Report'] }
                ].map(({ name, icon: Icon, path, submenu }) => (
                    <div key={name}>
                        <Link to={path} onClick={() =>  handleMenuClick(name)}>
                            <div className={`flex items-center px-5 py-1 cursor-pointer transition-all duration-300 ${!isSidebarOpen ? "justify-center" : ""}`}>
                                <div className={`flex items-center justify-between rounded-sm w-[232px] h-[44px] ${activemenu === name ||( !activeMenu &&activeMenu===activemenu && activeMenu===name )? 'bg-[#F7F6FB] text-[#2C2384] font-semibold' : 'text-gray-600 hover:bg-[#F7F6FB] hover:text-[#2C2384]'}`}>
                                    <div className="flex items-center">
                                        <Icon className="text-lg m-4" />
                                        {isSidebarOpen && <span className={`ml-3 font-normal rounded-sm hover:font-semibold ${activemenu === name|| activeMenu===name ? 'font-semibold ' : ''}`}>{name}</span>}
                                    </div>
                                    {isSidebarOpen && submenu.length > 0 && <FaChevronDown className={`text-xs transition-transform duration-300 ${expandedMenu === name ? 'rotate-180' : ''} mr-3`} />}
                                </div>
                            </div>
                        </Link>

                        {expandedMenu === name && submenu.length > 0 && (
                            <div className="pl-[60px] items-center justify-between rounded-sm w-[232px] ml-[20px]">
                                {submenu.map((item, index) => (
                                    <div key={index} className="text-gray-600 hover:text-[#2C2384] cursor-pointer py-2 px-5 transition-all duration-300">
                                        {isSidebarOpen ? item : null}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
