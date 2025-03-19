import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

function PaymentModal() {
  const [amountReceived, setAmountReceived] = useState('');
  
  const change = Number(amountReceived) - grandTotal;

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Modal Backdrop */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsModalOpen(false)}
        />
      )}

      {/* Sliding Modal */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isModalOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>

          <div className="mb-8">
            <div className="text-center mb-4">
              <div className="text-gray-600">Grand Total</div>
              <div className="text-3xl font-bold text-green-600">${grandTotal}</div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Enters Amount Received</label>
                <input
                  type="number"
                  value={amountReceived}
                  onChange={(e) => setAmountReceived(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Change To Be Given</label>
                <input
                  type="text"
                  value={`$${Math.max(0, change).toFixed(2)}`}
                  readOnly
                  className="w-full p-2 bg-gray-50 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-4">Cash Drawer Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Opening Balance:</span>
                  <span>$400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Balance:</span>
                  <span>$700</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Transactions</span>
                  <span>24</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Complete Payment
            </button>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal