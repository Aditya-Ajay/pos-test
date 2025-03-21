import React from 'react';
import { Check, X } from 'lucide-react';

export function PaymentSuccessModal({ onClose}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
        
        {/* Content */}
        <div className="p-6 flex flex-col items-center">
          {/* Success icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          
          {/* Message */}
          <h2 className="text-xl text-green-500 font-medium mb-6">
            Payment Successful !
          </h2>
          
          {/* Print Invoice Button */}
          <button
            onClick={() => console.log('Print invoice')}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
}