import React from "react";
import { UploadIcon } from "lucide-react";

export const RepairForm = () => {
  const orderTypes = [
    { value: "sale", label: "Sale" },
    { value: "return", label: "Return" },
    { value: "repair", label: "Repair" },
    { value: "custom", label: "Custom Order" },
  ];

  const jewelryDetailFields = [
    { id: "productType", label: "Product Type", type: "select" },
    { id: "materialType", label: "Material Type", type: "select" },
    { id: "stoneType", label: "Stone Type (If Any)", type: "select" },
  ];

  const paymentDetailFields = [
    { id: "laborCharges", label: "Labor Charges", type: "input" },
    { id: "materialCost", label: "Material Cost (If Added)", type: "input" },
    { id: "otherCharges", label: "Other Charges", type: "input" },
    { id: "advancePayment", label: "Advance if any", type: "input" },
  ];

  return (
    <div className="flex-1 overflow-hidden">
      <div className="p-6 space-y-6 h-[896px]">
        {/* Form content */}
        <div className="p-6 space-y-10">
          {/* Jewellery Detail Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-foundation-greygrey-900">Jewellery Detail</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 w-full">
                {jewelryDetailFields.map((field) => (
                  <div key={field.id} className="relative flex-1">
                    <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">{field.label}</label>
                    <select id={field.id} className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2">
                      <option value="">Select {field.label}</option>
                    </select>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-1">
                  <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Gross Weight</label>
                  <input type="number" id="grossWeight" placeholder="Enter gross weight" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2" />
                </div>

                <div className="relative flex-1">
                  <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Product Image</label>
                  <div className="relative border border-solid border-[#c9cbcc] rounded bg-white h-[45px]">
                    <input type="file" id="productImage" className="w-full opacity-0 absolute top-0 left-0" />
                    <div className="flex items-center justify-between px-4 py-2.5">
                      <span className="text-sm text-foundation-greygrey-600">Upload</span>
                      <UploadIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full">
                <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Jewelry Description</label>
                <textarea id="jewelryDescription" placeholder="Enter jewelry details" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 h-[100px]"></textarea>
              </div>
            </div>
          </div>

          {/* Repair Detail Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-[#39322f]">Repair Detail</h2>
            <div className="relative w-full">
              <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Repair Instructions</label>
              <textarea id="repairInstructions" placeholder="Enter repair instructions" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 h-[100px]"></textarea>
            </div>
          </div>

          {/* Payment Detail Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-[#39322f]">Payment Detail</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 w-full">
                {paymentDetailFields.slice(0, 3).map((field) => (
                  <div key={field.id} className="relative flex-1">
                    <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">{field.label}</label>
                    <input type="number" id={field.id} placeholder={`Enter ${field.label}`} className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2" />
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-1">
                  <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Advance Payment (if any)</label>
                  <input type="number" id="advancePayment" placeholder="Enter advance payment" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2" />
                </div>

                <div className="relative flex-1">
                  <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Date of Submission</label>
                  <input type="date" id="dateOfSubmission" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Accumulated Repair Amount Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-black">Accumulated Repair Amount</h2>
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-[266.67px]">
                <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Amount</label>
                <input type="number" id="accumulatedAmount" placeholder="Enter accumulated amount" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2" />
              </div>

              <button className="bg-[#3252ff] text-white py-3 px-6 rounded-md mt-6 w-[126px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
