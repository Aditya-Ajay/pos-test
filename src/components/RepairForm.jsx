import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { UploadIcon } from "lucide-react";

export const RepairForm = () => {
  // Define order types for toggle group
  const orderTypes = [
    { value: "sale", label: "Sale" },
    { value: "return", label: "Return" },
    { value: "repair", label: "Repair" },
    { value: "custom", label: "Custom Order" },
  ];

  // Define form field groups
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
    <Card className="flex-1 shadow-[0px_4px_80px_#9b90900f] overflow-hidden">
      <CardContent className="p-6 space-y-6 overflow-y-auto h-[896px]">
        {/* Order type toggle */}
        <div className="flex items-center">
          <ToggleGroup type="single" defaultValue="repair" className="flex">
            {orderTypes.map((type) => (
              <ToggleGroupItem
                key={type.value}
                value={type.value}
                className={`w-[148px] px-6 py-4 rounded-sm border border-solid ${
                  type.value === "repair"
                    ? "bg-foundation-blueblue-600 text-primarybasewhite border-[#221b67] font-inter-16px-semi-bold"
                    : "bg-white text-foundation-greygrey-900 border-[#eeeeef] font-inter-16px-medium"
                }`}
              >
                {type.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Form content */}
        <Card className="border border-solid border-[#e3ebee] shadow-[0px_4px_80px_#9b90900f] overflow-y-auto">
          <CardContent className="p-6 space-y-10">
            {/* Jewellery Detail Section */}
            <div className="space-y-8">
              <h2 className="font-inter-20px-medium text-foundation-greygrey-900">
                Jewellery&nbsp;&nbsp;Detail
              </h2>

              <div className="space-y-6">
                {/* First row of fields */}
                <div className="flex items-start gap-6 w-full">
                  {jewelryDetailFields.map((field) => (
                    <div key={field.id} className="flex-1">
                      <div className="relative border border-solid border-[#c9cbcc] rounded">
                        <div className="px-4 py-1">
                          <div className="flex items-center justify-between py-2.5">
                            <div className="font-inter-14px-regular text-foundation-greygrey-600">
                              Select
                            </div>
                            <img
                              className="flex-[0_0_auto]"
                              alt="Frame"
                              src="public/frame-2169.svg"
                            />
                          </div>
                          <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-white">
                            <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                              {field.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row of fields */}
                <div className="flex items-start gap-6">
                  {/* Gross Weight Field */}
                  <div className="flex-1 space-y-0.5">
                    <div className="relative border border-solid border-[#c9cbcc] rounded bg-white">
                      <div className="pl-4 pr-0 py-1">
                        <div className="flex flex-col items-start justify-center py-2.5">
                          <div className="flex items-center w-full">
                            <div className="flex-1 font-inter-14px-regular text-foundation-greygrey-600">
                              Input
                            </div>
                          </div>
                          <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                            <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                              Gross Weight
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-5 pt-1 pb-0 px-4">
                      <div className="font-inter-11px-regular text-foundation-greygrey-600">
                        Supporting text
                      </div>
                    </div>
                  </div>

                  {/* Product Image Upload */}
                  <div className="flex-1 space-y-0.5">
                    <div className="relative border border-solid border-[#c9cbcc] rounded bg-white h-[45px]">
                      <div className="px-4 py-1">
                        <div className="flex flex-col items-start justify-center py-2.5">
                          <div className="flex items-center justify-between w-full">
                            <div className="font-inter-14px-regular text-foundation-greygrey-600">
                              Upload
                            </div>
                            <UploadIcon className="w-5 h-5" />
                          </div>
                          <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                            <div className="font-inter-11px-regular text-foundation-greygrey-600 whitespace-nowrap">
                              Product Image
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-5 pt-1 pb-0 px-4">
                      <div className="font-inter-11px-regular text-foundation-greygrey-600">
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jewelry Description */}
                <div className="space-y-0.5 w-full">
                  <div className="relative border border-solid border-[#c9cbcc] rounded bg-white h-[100px]">
                    <div className="pl-4 pr-0 py-1 h-[45px]">
                      <div className="flex flex-col items-start justify-center py-2.5">
                        <div className="flex items-center w-full">
                          <div className="flex-1 font-inter-14px-regular text-foundation-greygrey-600">
                            Input Details
                          </div>
                        </div>
                        <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                          <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                            Jewelry Description
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-5 pt-1 pb-0 px-4">
                    <div className="font-inter-11px-regular text-foundation-greygrey-600">
                      Supporting text
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Repair Detail Section */}
            <div className="space-y-8">
              <h2 className="font-inter-20px-medium text-[#39322f]">
                Repair Detail
              </h2>

              <div className="w-full">
                <div className="space-y-0.5 w-full">
                  <div className="relative border border-solid border-[#c9cbcc] rounded bg-white h-[100px]">
                    <div className="pl-4 pr-0 py-1 h-[45px]">
                      <div className="flex flex-col items-start justify-center py-2.5">
                        <div className="flex items-center w-full">
                          <div className="flex-1 font-inter-14px-regular text-foundation-greygrey-600">
                            Input
                          </div>
                        </div>
                        <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                          <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                            Repair Instructions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-5 pt-1 pb-0 px-4">
                    <div className="font-inter-11px-regular text-foundation-greygrey-600">
                      Supporting text
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Detail Section */}
            <div className="space-y-8">
              <h2 className="font-inter-20px-medium text-[#39322f]">
                Payment Detail
              </h2>

              <div className="space-y-6">
                {/* First row of payment fields */}
                <div className="flex items-start gap-6 w-full">
                  {paymentDetailFields.slice(0, 3).map((field) => (
                    <div key={field.id} className="flex-1 space-y-0.5">
                      <div className="relative border border-solid border-[#c9cbcc] rounded bg-white">
                        <div className="pl-4 pr-0 py-1">
                          <div className="flex flex-col items-start justify-center py-2.5">
                            <div className="flex items-center w-full">
                              <div className="flex-1 font-inter-14px-regular text-foundation-greygrey-600">
                                Input
                              </div>
                            </div>
                            <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                              <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                                {field.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-5 pt-1 pb-0 px-4">
                        <div className="font-inter-11px-regular text-foundation-greygrey-600">
                          Supporting text
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row of payment fields */}
                <div className="flex items-start gap-6">
                  {/* Advance Payment */}
                  <div className="flex-1 space-y-0.5">
                    <div className="relative border border-solid border-[#c9cbcc] rounded bg-white">
                      <div className="pl-4 pr-0 py-1">
                        <div className="flex flex-col items-start justify-center py-2.5">
                          <div className="flex items-center w-full">
                            <div className="flex-1 font-inter-14px-regular text-foundation-greygrey-600">
                              Input
                            </div>
                          </div>
                          <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                            <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                              Advance if any
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-5 pt-1 pb-0 px-4">
                      <div className="font-inter-11px-regular text-foundation-greygrey-600">
                        Supporting text
                      </div>
                    </div>
                  </div>

                  {/* Date of Submission */}
                  <div className="flex-1 space-y-0.5">
                    <div className="relative border border-solid border-[#c9cbcc] rounded bg-white h-[45px]">
                      <div className="px-4 py-1">
                        <div className="flex flex-col items-start justify-center py-2.5">
                          <div className="flex items-center justify-between w-full">
                            <div className="font-inter-14px-regular text-foundation-greygrey-600">
                              DD/MM/YYYY
                            </div>
                            <UploadIcon className="w-5 h-5" />
                          </div>
                          <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                            <div className="font-inter-11px-regular text-foundation-greygrey-600 whitespace-nowrap">
                              Date of Submission
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-5 pt-1 pb-0 px-4">
                      <div className="font-inter-11px-regular text-foundation-greygrey-600">
                        Supporting text
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accumulated Repair Amount Section */}
            <div className="space-y-8">
              <h2 className="font-inter-20px-medium text-black">
                Accumulated Repair Amount
              </h2>

              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-0.5 max-w-[266.67px]">
                  <div className="relative border border-solid border-[#c9cbcc] rounded bg-white">
                    <div className="pl-4 pr-0 py-1">
                      <div className="flex flex-col items-start justify-center py-2.5">
                        <div className="flex items-center w-full">
                          <div className="flex-1 font-inter-14px-regular text-foundation-greygrey-600">
                            Input
                          </div>
                        </div>
                        <div className="inline-flex items-center px-1 py-0 absolute -top-3 -left-1 bg-m-3syslightsurface">
                          <div className="font-inter-11px-regular text-foundation-greygrey-900 whitespace-nowrap">
                            Auto Calculated Amount
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-48 bg-foundation-blueblue-600 text-primarybasewhite border border-[#221b67] rounded-sm font-inter-16px-semi-bold">
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};