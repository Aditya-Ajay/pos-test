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
      <div className="p-6 space-y-6 h-[896px] border border-solid border-[#E3EBEE] rounded" style={{ fontSize: "20px", fontWeight: '500', color: '#222526' }} >
        {/* Form content */}
        <div className="p-6 space-y-10">
          {/* Jewellery Detail Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-foundation-greygrey-900" style={{ fontSize: "20px", fontWeight: '500', color: '#39322F' }}>Jewellery Detail</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 w-full">
                {jewelryDetailFields.map((field) => (
                  <div key={field.id} className="relative flex-1 " >
                    <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>{field.label}</label>
                    <select
                      id={field.id}
                      className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 appearance-none text-[14px] font-[400] text-[#4B4F53]"
                    >
                      <option value="">Select</option>
                    </select>

                  </div>
                ))}
              </div>

              <div className="flex items-start gap-6 w-[66%]">
                <div className="relative flex-1">
                  <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>Gross Weight</label>
                  <input
                    type="number"
                    id="grossWeight"
                    placeholder="Input"
                    className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-3 pb-2 placeholder:text-[#4B4F53] placeholder:text-[14px] placeholder:font-[400]"
                  />
                </div>

                <div className="relative flex-1">
                  {/* Label with padding and background to avoid border cut */}
                  <label
                    className="absolute top-[-8px] left-3 px-1 text-sm text-gray-600 bg-white z-10"
                    style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}
                  >
                    Product Image
                  </label>

                  <div className="relative flex-1">


  {/* Extra padding on top to create space for label */}
  <div className="relative border border-solid border-[#c9cbcc] rounded bg-white h-[45px] flex items-center px-4 py-6" >
    <input 
      type="file" 
      id="productImage" 
      className="absolute w-full h-full opacity-0 cursor-pointer"
    />
    <div className="flex items-center justify-between w-full">
      <span className="text-sm text-foundation-greygrey-600">Upload</span>
      <UploadIcon className="w-5 h-5" />
    </div>
  </div>
</div>


              </div>
              </div>

              <div className="relative w-full">
                <label  className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>Jewelry Description</label>
                <textarea id="jewelryDescription" placeholder="Input" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 h-[100px] placeholder:text-[#4B4F53] placeholder:text-[14px] placeholder:font-[400]"></textarea>
              </div>
            </div>
          </div>

          {/* Repair Detail Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-foundation-greygrey-900" style={{ fontSize: "20px", fontWeight: '500', color: '#39322F' }}>Repair Detail</h2>
            <div className="relative w-full">
              <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>Repair Instructions</label>
              <textarea id="repairInstructions" placeholder="Input" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 h-[100px] placeholder:text-[#4B4F53] placeholder:text-[14px] placeholder:font-[400]"></textarea>
            </div>
          </div>

          {/* Payment Detail Section */}
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-foundation-greygrey-900" style={{ fontSize: "20px", fontWeight: '500', color: '#39322F' }}>Payment Detail</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-6 w-full">
                {paymentDetailFields.slice(0, 3).map((field) => (
                  <div key={field.id} className="relative flex-1">
                    <label  className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>{field.label}</label>
                    <input type="number" id={field.id} placeholder='Input' className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 placeholder:text-[#4B4F53] placeholder:text-[14px] placeholder:font-[400]" />
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-6">
                <div className="relative flex-1">
                  <label  className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>Advance Payment (if any)</label>
                  <input type="number" id="advancePayment" placeholder="Input" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 placeholder:text-[#4B4F53] placeholder:text-[14px] placeholder:font-[400]" />
                </div>

                <div className="relative flex-1">
                  <label  className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600" style={{ fontSize: "11px", fontWeight: '400', color: '#222526' }}>Date of Submission</label>
                  <input 
                  type="date" 
                  id="dateOfSubmission"     
                  placeholder="DD/MM/YYYY"
                  className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 text-[#4B4F53] text-[14px] font-[400]"/>  
               </div>
              </div>
            </div>
          </div>

          {/* Accumulated Repair Amount Section
          <div className="space-y-8">
            <h2 className="font-inter-20px-medium text-black">Accumulated Repair Amount</h2>
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-[266.67px]">
                <label className="absolute top-[-10px] left-3 bg-white px-1 text-sm text-gray-600">Amount</label>
                <input type="number" id="accumulatedAmount" placeholder="Input" className="w-full border border-solid border-[#c9cbcc] rounded px-4 pt-5 pb-2 placeholder:text-[#4B4F53] placeholder:text-[14px] placeholder:font-[400]" />
              </div>

              <button className="bg-[#3252ff] text-white py-3 px-6 rounded-md mt-6 w-[126px]">Submit</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
