import React from "react";
import { X } from "lucide-react";

const CancelModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-80">
        <button onClick={onClose} className="absolute right-4 top-4">
          <X size={16} />
        </button>
        <h2 className="text-center text-red-500 font-medium">Want to cancel this order?</h2>
        <p className="text-gray-400 text-center">You cannot undo this action.</p>
        <div className="flex gap-3 mt-4">
          <button onClick={() => window.location.reload()} className="bg-red-500 text-white py-2 rounded-lg">Yes</button>
          <button onClick={onClose} className="bg-gray-300 py-2 rounded-lg">No</button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
