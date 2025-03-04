import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'

function AdminDashboard() {
  const [store, setStore] = useState('J Galleria')
  const [user, setUser] = useState({
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  })

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
    
      <div className="flex-1 overflow-y-auto p-0 bg-gray-100">
        <Header store={store} user={user} />
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminDashboard