import React, { useState, useEffect  , useRef} from 'react';
import { Search, Bell, Settings, ChevronDown, Mail, UserCircle2, Scan,User, ArrowBigLeft, ArrowBigRight, Edit2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/solis_pos.png"
import scanner from "../assets/scanner.png"
import CustomerInformation from './CustomerInformation';
import { fetchProductById, removeProduct } from '../redux/Product/ProductSlice';
import { Pencil, CreditCard, Banknote ,  X  , UserPlus , Edit} from 'lucide-react';
import { fetchCustomerByNumber } from '../redux/Customer/CustomerSlice';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import bin from "../assets/bin.png"
import edit from "../assets/edit.png"
import Setting from "../assets/Setting.png"
import { createOrder } from '../redux/Order/OrderSlice';

function App() {
  const products = useSelector((state) => state?.product?.products);
  const customer = useSelector((state) => state?.customer?.customer);
  const order = useSelector((state)=> state?.order?.sucessfull);
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
  const dispatch = useDispatch();


 

  
  console.log(customer)





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
    { months: 3, amount: parseFloat((grandTotal / 3).toFixed(2)) },
    { months: 6, amount: parseFloat((grandTotal / 6).toFixed(2)) },
    { months: 9, amount: parseFloat((grandTotal / 9).toFixed(2)) },
    { months: 12, amount: parseFloat((grandTotal / 12).toFixed(2)) },
    { months: 24, amount: parseFloat((grandTotal / 24 ).toFixed(2)) },
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center flex-1 gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 " style={{width : '200px'}}>
      
            <img src={logo} alt=""/>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl flex-1 relative ml-20">
  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" style={{color : '#5542BA'}}/>
  <input
    type="text"
    placeholder="Search"
    className="pl-10 pr-4 py-2 bg-white-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-lg"
    style={{ width: '75%' }}
  />
</div>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Store Selector */}
            <div className="flex items-center gap-2 bg-white shadow-lg p-3 rounded-lg">
  <span className="text-gray-600" style={{ color: "#5542BA" }}>Store:</span>
  <select className="bg-transparent border-none text-gray-800 font-medium focus:outline-none cursor-pointer">
    <option>Jewels Galleria</option>
  </select>
</div>


            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Mail className="w-5 h-5 text-gray-600" style={{color : '#5542BA'}} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-600"  style={{color : '#5542BA'}}/>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" style={{color : '#5542BA'}} />
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2 bg-white shadow-md  p-3 rounded-lg">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-medium">John Smith</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && <CustomerInformation open={open} setOpen={setOpen} />}
      {showModal && <CancelModal isOpen={showModal} onClose={()=>setShowModal(false)} onConfirm={()=>setShowModal(false)} />}

      {/* Main Content */}
      <div className="bg-white shadow-sm mt-6 mx-auto pt-2 pb-0.1 pl-2 pr-2 max-w-7xl">
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
      </div>

      <main className="max-w-7xl mx-auto px-4">
        <div className="flex gap-6">
          <div className="flex-1">
            <div className="flex gap-3 mb-6">
              <button className="px-4 py-2 border border-[#5542BA] text-[#5542BA] bg-white border-color" >
                Create Orders
              </button>
              <button className="px-4 py-2 text-[#5542BA]  border-color">
                Add Returns
              </button>
              <button className="px-4 py-2 text-[#5542BA]  border-color">
                Repair Order
              </button>
              <button className="px-4 py-2 text-[#5542BA]  border-color">
                Custom
              </button>
              <div className="flex-1" />

            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm h-100vh">
              <div className="flex items-center gap-4 mb-6 px-2" style={{ backgroundColor: "#f8f8fc" }}>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <img src={scanner} alt="Scanner" />
                </div>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Search By Product Code/Name"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg"
                />
              </div>

              <table className="w-full ">
                <thead className="bg-gray" style={{ backgroundColor: "#FFF9EB" }}>
                  <tr>
                    <th className="text-left p-4">Image</th>
                    <th className="text-left p-4">#</th>
                    <th className="text-left p-4">Product Code</th>
                    <th className="text-left p-4">Product Type</th>
                    <th className="text-left p-4">Price</th>
                    <th className="text-left p-4">Qty</th>
                    <th className="text-left p-4">Sub Total</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product?._id} className="border-t">
                      <td className="p-4">
                        <img
                          src={product.image}
                          className="w-12 h-12 rounded-lg object-contain bg-transparent"
                        />
                      </td>
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{product?.barcode}</td>
                      <td className="p-4">{product?.name}</td>
                      <td className="p-4">{product?.finalPrice}</td>
                      <td className="p-4">{product?.quantity || 1}</td>
                      <td className="p-4">{product?.finalPrice * (product?.quantity || 1)}</td>
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
              </table>
            </div>
          </div>
{!nextPage ?
          <div className="w-100">
            <div className="bg-white px-8 pt-2  shadow-sm pb-8" style={{borderRadius :"4px"}}>
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              <p className="text-gray-500 text-sm mb-6">Transaction ID #1982761892</p>
              <div className="relative flex items-center gap-2 mb-6">
              {
  Object.keys(customer).length == 0 ? (
    <>
      <input
        type="text"
        placeholder="+91  Add Phone Number"
        onChange={(e) => { setPhoneNumber(e.target.value); }}
        value={phoneNumber}
        className="flex-1 px-4 py-2 rounded-lg pl-10" // Extra padding for icon space
        style={{ border: "1px solid rgba(195, 195, 253, 1)" }}
      />
      <button
        className="absolute right-0 p-2 pl-4 pr-4 text-gray-600 transition"
        style={{ background: 'rgba(195, 195, 253, 1)' }}
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
                    className="w-20 px-2 py-1 border border-gray-200 rounded"
                    onChange={handleDiscountPercentage}
                    ref={discountPercentage}
            
                  />
                  <span>Or</span>
                  <input
                    type="text"
                    placeholder="$ 0.000"
                    disabled={disable}
                    className="w-24 px-2 py-1 border border-gray-200 rounded"
                    onChange={handleAmountChange}
                    ref={discountAmount}
                  />
                  <button style={{ color: '#5542BA' }} onClick={DiscountApply}>
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

              <button className="w-full text-center py-3 text-purple-600 rounded-sm mb-4" style={{ background: 'rgba(240, 240, 254, 1)', color: '#5542BA' }}>
                + Add Exchange
              </button>

              <div className="text-center mb-4 p-4" style={{ background: 'rgba(240, 240, 254, 0.35)' }}>
                <div className="text-sm text-gray-500">Amount Payable</div>
                <div className="text-2xl font-bold">$ {grandTotal}</div>
              </div>

              <button className="w-full mt-5 py-3 font-bold rounded-sm" style={{backgroundColor : "rgba(118, 208, 157, 0.32)" , color : "rgba(24, 147, 77, 1)"}} disabled={confirmDisable} onClick={confirmOrder}>
               Next Order
              </button>
            </div>
          </div>
          : <div className=" px-8 pt-2 rounded-lg  pb-8">
          <div className=" rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">Payment Summary</h1>
              <p className="text-sm text-gray-500">Transaction ID #1982761892</p>
            </div>
    
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="text-gray-600">Customer: {customer.name}</span>
              </div>
              <button
      className="flex ml-40 text-blue-500 hover:text-blue-700"
      onClick={() => {setOpen(!open)}}
    >
   <img src={edit} alt="" width={30} />
    </button>
            </div>
    
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 text-center mb-2">Amount Payable</p>
              <p className="text-3xl font-bold text-center text-gray-800">${grandTotal}</p>
            </div>

{/* layway detail section  */}

<div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Layaways Details</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2 mb-4">
                <span className="text-gray-700">Add down payment amount</span>
              </label>
              <input
                type="text"
                placeholder="Enter Amount (in $) "
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
{/* 
            <div className="relative">
              <button
                onClick={() => setLayawayTenure(layawayTenure ? '' : '3 months')}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-left flex justify-between items-center"
              >
                <span className="text-gray-700">
                  {layawayTenure || 'Choose Layaways Tenure'}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div> */}
   
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
    <button className="w-full text-center py-3 mt-10 text-purple-600 rounded-sm mb-4" style={{ background: 'rgba(240, 240, 254, 1)', color: '#5542BA' }}>
                + CREATE ORDER
              </button>
    
          </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <PaymentMethod 
                icon={<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/receipt.svg" alt="Cheque" className="w-6 h-6" />}
                label="Cheque"
              />
              <PaymentMethod 
                icon={<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/wallet.svg" alt="Venmo" className="w-6 h-6" />}
                label="Venmo"
              />
              <PaymentMethod 
                icon={<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/gift.svg" alt="Gift Card" className="w-6 h-6" />}
                label="Gift Card"
              />
              <PaymentMethod 
                icon={<img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/landmark.svg" alt="Zelle" className="w-6 h-6" />}
                label="Zelle"
              />
              <PaymentMethod 
                icon={<Banknote className="w-6 h-6" />}
                label="Cash"
              />
              <PaymentMethod 
                icon={<CreditCard className="w-6 h-6" />}
                label="Card"
              />
            </div>
    
            <button className="w-full bg-red-400 text-white font-medium py-3 rounded-lg hover:bg-red-500 transition-colors" onClick={handleCancelModal}>
              Cancel Order
            </button>
          </div>
        </div>}
        </div> 
      </main>
    </div>
  );
}

export default App;
