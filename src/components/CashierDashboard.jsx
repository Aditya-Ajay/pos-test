import React, { useState, useEffect  , useRef} from 'react';
import { Search, Bell, Settings, ChevronDown, Mail, UserCircle2, Scan,User, ArrowBigLeft, ArrowBigRight, Edit2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import scanner from "../assets/scanner-removebg-preview.png"
import CustomerInformation from './CustomerInformation';
import { fetchProductById, removeProduct } from '../redux/Product/ProductSlice';
import { Pencil, CreditCard, Banknote ,  X  , UserPlus , Edit , Tag} from 'lucide-react';
import { fetchCustomerByNumber } from '../redux/Customer/CustomerSlice';
import venmo from "../assets/venmo.png"
import zelle from "../assets/zelle.png"
import cash from "../assets/cash.png"
import card from "../assets/card.png"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLocation } from "react-router-dom";

import Sidebar from './Sidebar';
import bin from "../assets/bin.png"
import edit from "../assets/edit.png"
import Setting from "../assets/Setting.png"
import { createOrder } from '../redux/Order/OrderSlice';
import { RepairForm } from './RepairForm';
import PaymentModal from './PaymentModal';

function PaymentOption({ icon, label, bgColor , onClick  }) {
  return (
    <button className={`${bgColor} rounded-lg p-4 flex items-center gap-3 w-full transition hover:opacity-90`} onClick={onClick}>
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}


function App() {
  const products = useSelector((state) => state?.product?.products);
  const customer = useSelector((state) => state?.customer?.customer);
  const successfull = useSelector((state)=> state?.order?.sucessfull);
  const error = useSelector((state)=>state?.order?.error);
  const orderDetails = useSelector((state)=> state?.order?.order);
  console.log(orderDetails)
  const [selectedTenure, setSelectedTenure] = useState("");


  const [confirmDisable , setConfirmDisable] = useState(true)
  const [selectedOption, setSelectedOption] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode , setCountryCode] = useState('+91')
  const [finalNumber , setFinalNumber] = useState(null)
  const [downPayment , setDownPayment] = useState('')
  const [layawayTenure , setLayawayTenure] = useState('')
  const [layawayStatus , setLayawayStatus] = useState(false)
  const [paymentTrue , setPaymentTrue] = useState(false)
  const dispatch = useDispatch();


  const [selectedTab, setSelectedTab] = useState('sale'); // Default to 'sale' tab
  // Tab change handler
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };


 


  
  console.log(customer)


  const handleCancel = ()=>{
    window.location.reload()
  }

  function CancelModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;


  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-sm mx-4 relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
          
          <div className="p-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#F5F3FF] rounded-full flex items-center justify-center">
                <span className="text-[#8B5CF6] text-3xl font-semibold">?</span>
              </div>
            </div>
  
            <h2 className="text-xl text-center text-[#F87171] font-medium mb-2">
              Want to cancel this order?

            </h2>
            
            <p className="text-gray-400 text-center text-sm mb-6">
              You cannot undo this action
            </p>
  
            <div className="flex gap-3">
              <button
                onClick={()=>{window.location.reload()}}
                className="flex-1 bg-[#EF4444] text-white py-2.5 px-4 rounded-lg hover:bg-[#DC2626] transition-colors font-medium"
              >
                Yes
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#F3F4F6] text-[#6B7280] py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [disable ,  setDisable] = useState(true)
  const [nextPage , setNextPage] = useState(false)
  const [showModal  , setShowModal] = useState(false)
  const discountPercentage  = useRef(null);
  const discountAmount = useRef(null);
  const layawayOptions = [
    { months: 3, amount: parseFloat((grandTotal - downPayment / 3).toFixed(2)) },
    { months: 6, amount: parseFloat((grandTotal - downPayment/ 6).toFixed(2)) },
    { months: 9, amount: parseFloat((grandTotal - downPayment / 9).toFixed(2)) },
    { months: 12, amount: parseFloat((grandTotal - downPayment/ 12).toFixed(2)) },
    { months: 24, amount: parseFloat((grandTotal - downPayment/ 24 ).toFixed(2)) },
  ];
  const orderData = {
    customerId : customer?._id,
    items: products.map(product => ({ inventoryId: product?._id })) , 
    discountPercentage : discountPercentage?.current?.value ,
  }

  const confirmOrder  =()=>{
    setNextPage(true);
  }



  console.log(orderData)
  function PaymentMethod({ icon, label }) {
    return (
      <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-indigo-500 transition-colors">
        <div className="mb-2">{icon}</div>
        <span className="text-sm text-indigo-600">{label}</span>
      </button>
    );
  }

  const handleCancelModal = ()=>{
    setShowModal(true)
  }

 
useEffect(() => {
  if (products.length === 0) {
    setDisable(true); // Disable the action if there are no products
    setConfirmDisable(true)
  } else {
    setDisable(false); // Enable the action if there are products
    setConfirmDisable(false)
  }
}, [products]); 

useEffect(()=>{
  if (phoneNumber.replace(/\D/g, "").length === 10) {
   let number = `${countryCode}-${phoneNumber}`
   dispatch(fetchCustomerByNumber(number))
   console.log(customer)
  }
},[phoneNumber])

  // Update total and grandTotal whenever products change
  useEffect(() => {
    let total_final = 0;
    products.forEach((product) => {
      total_final += product?.finalPrice * (product?.quantity || 1); // Assuming quantity is available in each product
    });
    setTotal(total_final);

    const grand_Total = total_final + (total_final * 0.0865);
    setGrandTotal(grand_Total);
  }, [products]);


  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  const handleDiscountPercentage = ()=>{
    const value = discountPercentage.current.value;
    if (value) {
      const percentage = parseFloat(value);
      if (!isNaN(percentage)) {
        const amount = (percentage / 100) * total;
        discountAmount.current.value = `$ ${amount.toFixed(2)}`;
      }
  }else{
    discountAmount.current.value = ""
  }
}

const handleAmountChange = ()=>{
  const value = discountAmount.current.value;
  if (value) {
    const amount = parseFloat(value);
    if (!isNaN(amount)) {
      const percentage = (amount / total) * 100;
      discountPercentage.current.value = percentage.toFixed(2);
    }
  }else{
    discountPercentage.current.value = ""
  }
}


  const DiscountApply = () => {
    console.log(parseFloat(discountAmount.current.value.replace('$', '').trim()))
    setGrandTotal(grandTotal - parseFloat(discountAmount.current.value.replace('$', '').trim()))
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const length = Math.log(value) * Math.LOG10E + 1 | 0;
    if (length === 9) { 
      dispatch(fetchProductById(value));
    }
  };
  const location = useLocation();
  const showSidebar = location.pathname.includes("admin-dashboard/pos");
  return (
    <div className="flex bg-gray-50 w-full h-[100%] overflow-hidden">
      {showSidebar &&<Sidebar activemenu={'POS'} />}

    <div className="flex-1 p-[1%] ">
      {/* Header */}

      {open && <CustomerInformation open={open} setOpen={setOpen} />}
      {showModal && <CancelModal isOpen={showModal} onClose={()=>setShowModal(false)} onConfirm={()=>setShowModal(false)} />}

      {/* Main Content */}
      {/* <div className="bg-white shadow-sm mt-6 mx-auto pt-2 pb-0.1 pl-2 pr-2 max-w-7xl">
        <div className="flex justify-between items-center mb-6 pl-2 py-2">
        <h1 class="font-weight-800">
  HELLO SMITH
  <p class="font-normal text-gray-500">Let's create orders</p>
</h1>

          <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-[#5542BA] bg-[#5542BA] text-white">
                Pay Layaways
              </button>
          <button className="px-4 py-2 text-[#5542BA] bg-[#5542BA] text-white ">
               View Orders
              </button>
          </div>
        </div>
      </div> */}

      <main className="max-w-8xl mx-auto px-4 mt-10">
        <div className="flex gap-6">
          <div className="flex-1">
      
            <div className="bg-white p-6 rounded-lg shadow-sm h-100vh">
            <div className="flex gap-4 mb-6">
            <button onClick={() => handleTabChange('sale')} className="border border-[#ffffff] text-[#5542BA] border-color rounded shadow-sm" style={{ padding: '10px 24px', minWidth: '15%', backgroundColor: selectedTab === 'sale' ? '#221B67' : 'white', color: selectedTab === 'sale' ? 'white' : '#5542BA', borderColor: selectedTab === 'sale'?'#221B67' : 'white'}}>Sale</button>
      <button onClick={() => handleTabChange('return')} className="border border-[#ffffff] text-[#5542BA] border-color rounded shadow-sm" style={{ padding: '10px 24px', minWidth: '15%', backgroundColor: selectedTab === 'return' ? '#221B67' : 'white', color: selectedTab === 'return' ? 'white' : '#5542BA',borderColor: selectedTab === 'return'?'#221B67' : 'white' }}>Return</button>
      <button onClick={() => handleTabChange('repair')} className="border border-[#ffffff] text-[#5542BA] border-color rounded shadow-sm"  style={{ padding: '10px 24px', minWidth: '15%', backgroundColor: selectedTab === 'repair' ? '#221B67' : 'white', color: selectedTab === 'repair' ? 'white' : '#5542BA',borderColor: selectedTab === 'repair'?'#221B67' : 'white' }}>Repair</button>
      <button onClick={() => handleTabChange('customOrder')} className="border border-[#ffffff] text-[#5542BA] border-color rounded shadow-sm" style={{ padding: '10px 24px', minWidth: '15%', backgroundColor: selectedTab === 'customOrder' ? '#221B67' : 'white', color: selectedTab === 'customOrder' ? 'white' : '#5542BA',borderColor: selectedTab === 'customOrder'?'#221B67' : 'white' }}>Custom Order</button>
              <div className="flex-1" />

            </div>
            {selectedTab === 'sale' &&(
               <div className="flex items-center gap-4 mb-6 px-4 py-6" style={{ backgroundColor: "#ECF0F3" }}>
               <div className="relative w-90">
                 <input
                   type="text"
                   onChange={handleChange}
                   placeholder="Search By SKU/Name/Barcode Number"
                   className="w-full px-20 py-2 border border-gray-200 rounded-sm placeholder-black"
                 />
                 <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                   <img src={scanner} alt="Scanner" className="w-10 h-10" />
                 </div>
               </div>
             </div>)} 
             
             
                           {selectedTab === 'sale' &&(<table className="w-full ">
                           <thead>
               <tr>
                 <th className="text-left p-4 head-color font-normal">#</th>
                 <th className="text-left p-4 head-color font-normal">Image</th>
                 <th className="text-left p-8 head-color mr-4 font-normal">SKU</th> {/* Adds margin-right */}
                 <th className="text-left p-4 head-color font-normal">Product Type</th>
                 <th className="text-left p-4 head-color font-normal">Price</th>
                 <th className="text-left p-4 head-color font-normal">Action</th>                
                 <th className="p-4"></th>
               </tr>
             </thead>
             
                             <tbody>
                               {products.map((product, index) => (
                                 <tr key={product?._id} className="border-t">
                                 
                                   <td className="p-4">{index + 1}</td>
                                   <td className="p-4">
                                     <img
                                       src={product.image}
                                       className="w-12 h-12 rounded-lg object-contain bg-transparent"
                                     />
                                   </td>
                                   <td className="p-4">{product?.barcode}</td>
                                   <td className="p-4">{product?.name}</td>
                                   <td className="p-4">{`$ ${product?.finalPrice}`}</td>
                                   <td className="p-4">
                                     <button
                                       className="p-4 text-red-500"
                                       onClick={() => handleDelete(product?._id)}
                                     >
                                       <img src={bin} alt="bin"  width={40}/>
                                     </button>
                                   </td>
                                 </tr>
                               ))}
                             </tbody>
                           </table>)}
           
            {selectedTab === 'repair' && (
                <RepairForm />

            )}
            </div>
          </div>
{!nextPage ?
          <div className="w-100">
            <div className="bg-white px-8 pt-2  shadow-sm pb-8" style={{borderRadius :"4px"}}>
              <h2 className="text-xl font-semibold mb-2" style={{color :"#2C2384"}}>Order Summary</h2>
              <p className="text-gray-500 text-sm mb-6" style={{background : "#E8F6F8" , paddingLeft : '1rem' , paddingRight : "1rem" , paddingTop : "0.5rem" , paddingBottom  : "0.5rem" ,  width : "65%"}}>Transaction ID #1982761892</p>
              <div className="relative flex items-center gap-2 mb-6">
              {
  Object.keys(customer).length == 0 ? (
    <>
      <input
        type="text"
        placeholder="+91  Add Phone Number"
        onChange={(e) => { setPhoneNumber(e.target.value); }}
        value={phoneNumber}
        className="flex-1 px-4 py-2 rounded-sm pl-10" // Extra padding for icon space
        style={{ border: "1px solid #BFBCDD" }}
      />
      <button
        className="absolute right-0 p-2 pl-4 pr-4 text-gray-600 transition"
        style={{ background: '#F9FAFB' }}
        onClick={() => setOpen(!open)}
      >
        <UserPlus size={24} style={{ color: "rgba(85, 66, 186, 1)" }} />
      </button>
    </>
  ) : (
    <div className="flex items-center">
    <p className="mr-10">{` Customer :   ${customer.name}`}</p>
    <button
      className="flex ml-40 text-blue-500 hover:text-blue-700"
      onClick={() => {setOpen(!open)}}
    >
   <img src={edit} alt="" width={30} />
    </button>
  </div>
  )
}

        
    </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Actual Amount:</span>
                  <span>${total}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Discount:</span>
                  <input
                    type="number"
                    placeholder="0%"
                    disabled={disable}
                    className="w-20 px-2 py-1 border border-gray-200 rounded-sm"
                    onChange={handleDiscountPercentage}
                    ref={discountPercentage}
            
                  />
                  <span>Or</span>
                  <input
                    type="text"
                    placeholder="$ 0.000"
                    disabled={disable}
                    className="w-24 px-2 py-1 border border-gray-200 rounded-sm"
                    onChange={handleAmountChange}
                    ref={discountAmount}
                  />
                  <button style={{ color: '#5542BA' , border : "1px solid #2C2384 " , padding : "10px 16px" , backgroundColor : "#F9FAFB" }} onClick={DiscountApply}>
                    Apply
                  </button>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>8.65%</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Grand Total:</span>
                  <span>$ {grandTotal}</span>
                </div>
              </div>

              <div className="w-full max-w-md flex items-center justify-between gap-2 bg-white rounded-sm p-6 shadow-sm" style={{ backgroundColor: "#FFF6E6" }}>
  <Tag className="text-gray-400 w-5 h-5" />
  <div className="flex-grow">
    Enter Coupon Code
  </div>

  <button
    className="px-4 py-1 text-[#FF6B35] hover:bg-orange-50 rounded transition-colors text-sm font-medium"
  >
    Apply
  </button>
</div>


              <button className="w-full text-center py-3 rounded-sm mb-4" style={{color : "#2C2384" , fontWeight : "500" , textDecoration : "underline"}}>
                 Add Exchange
              </button>

              <div className="text-center mb-4 p-4" style={{ background: '#EAF6EC'  , color : "#24983F"}}>
                <div className="text-sm text-gray-500">Payable Amount</div>
                <div className="text-2xl font-bold">$ {grandTotal}</div>
              </div>

              <button className="w-full mt-5 py-3 font-bold rounded-sm " style={{backgroundColor : "#2C2384" , color : "white"}} disabled={confirmDisable} onClick={confirmOrder}>
              Confirm Order
              </button>
            </div>
          </div>
          :  <div className="bg-white rounded-lg w-full max-w-md mx-4 relative">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-2xl font-semibold text-indigo-900">Order Summary</h1>
              <div className="bg-blue-50 p-2 rounded inline-block">
                <span className="text-gray-600">Transaction ID</span>{' '}
                <span className="font-medium">#1982</span>
              </div>
            </div>
    
            {/* Customer Info */}
            <div className="flex items-center justify-between py-2">
              <div className="text-gray-700">
                Customer: <span className="font-medium">{customer?.name}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600"   onClick={() => {setOpen(!open)}}>
                <Pencil size={18} />
              </button>
            </div>
    
            {/* Amount */}
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-center">
                <div className="text-sm text-gray-600">Payable Amount</div>
                <div className="text-3xl font-semibold text-green-600">{` $ ${grandTotal}`}</div>
              </div>
            </div>
    
            {/* Ordering for someone else */}
            <div className="bg-orange-50 p-4 flex items-center justify-between">
              <span className="text-gray-700">Ordering for someone else?</span>
              <button className="text-orange-500 font-medium hover:text-orange-600  px-2 py-2" style={{border : '1px solid #FF8245'}}>
                Add Details
              </button>
            </div>
    
            {/* Add Layaways */}
            <button className="w-full border-2 border-indigo-900 text-indigo-900 rounded-lg py-3 font-medium hover:bg-indigo-50 transition" onClick={()=>setLayawayStatus(true)}>
              Add Layaways
            </button>
            {layawayStatus && (
  <div className="border border-gray-200 rounded-lg p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-900">Layaways Details</h2>
      <button className="text-gray-400 hover:text-gray-600" onClick={() => setLayawayStatus(false)} >
        <X className="w-5 h-5" />
      </button>
    </div>

    <div className="mb-6">
      <label className="flex items-center gap-2 mb-4">
        <span className="text-gray-700">Add down payment amount</span>
      </label>
      <input
        type="text"
        placeholder="Enter Amount (in $)"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
    <div className="bg-purple-50 rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-gray-700">Balance Amount : </span>
        <span className="text-xl font-semibold text-purple-600">{`$ ${grandTotal - downPayment}`}</span>
      </div>
    </div>

    <div className="w-64">
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-64">
          <Select value={selectedTenure} onValueChange={setSelectedTenure}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Choose Layaways Tenure" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {layawayOptions.map((option) => (
                  <SelectItem 
                    key={option.months} 
                    value={option.months.toString()}
                    className="py-3 px-4 hover:bg-gray-100"
                  >
                    <div className="flex justify-between items-center w-full gap-x-10">
                      <span>{option.months} Months</span>
                      <span className="text-gray-600">$ {option.amount}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </div>
)}  
            {/* Payment Options */}
            <div className="grid grid-cols-2 gap-4">
              <PaymentOption
                icon={<img src={venmo} alt="Venmo" className="w-10 h-10" />}
                label="Venmo"
                bgColor="bg-blue-50 text-blue-600"
              

              />
              <PaymentOption
                icon={<img src={zelle} alt="Zelle" className="w-10 h-10" />}
                label="Zelle"
                bgColor="bg-purple-50 text-purple-600"
              />
              <PaymentOption
                icon={<img src={cash} alt="Zelle" className="w-10 h-10" />}
                label="Cash"
                bgColor="bg-green-50 text-green-600"
                onClick={() => {
                  setPaymentTrue(true)
                        }}
              />
              <PaymentOption
                icon={<img src={card} alt="Zelle" className="w-10 h-10" />}
                label="Card"
                bgColor="bg-orange-50 text-orange-600"
              />
            </div>


{paymentTrue   && <PaymentModal isModalOpen={paymentTrue} setIsModalOpen={setPaymentTrue}  grandTotal={grandTotal} createOrder={createOrder} orderData={orderData}  successfull={successfull} error={error}/>}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button className="w-full border-2 border-indigo-900 text-indigo-900 rounded-lg py-3 font-medium hover:bg-indigo-50 transition" onClick={handleCancel}>
                Cancel Order
              </button>
              <button className="w-full border-2 border-indigo-900 text-indigo-900 rounded-lg py-3 font-medium hover:bg-indigo-50 transition" onClick={()=>{setNextPage(false)}}>
                Back
              </button>
            </div>
          </div>
        </div>
          }
        </div> 
      </main>
    </div>
    </div>
  );
}

export default App;
