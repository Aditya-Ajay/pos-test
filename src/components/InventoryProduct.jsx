import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { 
  Plus, Download, Table2, Printer, Calendar, Filter,
  Pencil, Trash2
} from 'lucide-react';

const InventoryProduct = () => {
  const [store, setStore] = useState('J Galleria');
  const [user, setUser] = useState({
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  });
  const [dateRange, setDateRange] = useState('Jan - Feb');

  const items = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=50&h=50&fit=crop',
      barcode: '# 43657 NF324',
      category: 'Necklace',
      productPrice: 4000,
      sellingPrice: 5000,
      grossWeight: 12.4
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=50&h=50&fit=crop',
      barcode: '# 43657 NF324',
      category: 'Ring',
      productPrice: 4000,
      sellingPrice: 5000,
      grossWeight: 12.4
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=50&h=50&fit=crop',
      barcode: '# 43657 NF324',
      category: 'Earring',
      productPrice: 4000,
      sellingPrice: 5000,
      grossWeight: 12.4
    },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-0 bg-gray-100">
        <Header store={store} user={user} />

        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-[1400px] mx-auto">
            {/* Header Actions */}
            <div className="flex justify-end gap-2 mb-6">
              <button className="bg-white border px-4 py-2 rounded-md flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Stock
              </button>
              <button className="p-2 border rounded-md">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 border rounded-md">
                <Table2 className="w-5 h-5" />
              </button>
              <button className="p-2 border rounded-md">
                <Printer className="w-5 h-5" />
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <input
                type="search"
                placeholder="Search"
                className="flex-1 min-w-[300px] px-4 py-2 border rounded-md"
              />
              <button className="px-4 py-2 border rounded-md flex items-center gap-2 bg-white">
                <Calendar className="w-5 h-5" />
                <span>{dateRange}</span>
              </button>
              <button className="p-2 border rounded-md bg-gray-200">
                <Filter className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-4 mb-6">
              <select className="px-4 py-2 border rounded-md bg-white">
                <option>Select Category</option>
              </select>
              <select className="px-4 py-2 border rounded-md bg-white">
                <option>Metal Type</option>
              </select>
              <select className="px-4 py-2 border rounded-md bg-white">
                <option>Stone Type</option>
              </select>
              <select className="px-4 py-2 border rounded-md bg-white">
                <option>Purity</option>
              </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th className="px-6 py-3 text-left">#</th>
                    <th className="px-6 py-3 text-left">Image</th>
                    <th className="px-6 py-3 text-left">Product Barcode</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Product Price</th>
                    <th className="px-6 py-3 text-left">Selling Price</th>
                    <th className="px-6 py-3 text-left">Gross W</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-6 py-4">{item.id}</td>
                      <td className="px-6 py-4">
                        <img 
                          src={item.image} 
                          alt={item.category}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">{item.barcode}</td>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">${item.productPrice.toLocaleString()}</td>
                      <td className="px-6 py-4">${item.sellingPrice.toLocaleString()}</td>
                      <td className="px-6 py-4">{item.grossWeight} gm</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Pencil className="w-5 h-5" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              <div className="px-6 py-4 flex items-center justify-between border-t">
                <div className="text-sm text-gray-700">
                  1 - 7 of 120 Items
                </div>
                <div className="flex gap-1">
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">1</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryProduct;
