import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Settings, ChevronDown, Mail, UserCircle2, Scan, User, ArrowBigLeft, ArrowBigRight, Edit2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/solis_pos.png"
import scanner from "../assets/scanner-removebg-preview.png"
import CustomerInformation from './CustomerInformation';
import { fetchProductById, removeProduct } from '../redux/Product/ProductSlice';
import { Pencil, CreditCard, Banknote, X, UserPlus, Edit, Tag } from 'lucide-react';
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
import ProductSearch from './ProductSearch';
import Sales from './Sales';
import OrderSummary from './OrderSummary';
import { RepairFormSection } from './RepairFormSection';
import { RepairForm } from './RepairForm';

function App() {
  const products = useSelector((state) => state?.product?.products);
  const customer = useSelector((state) => state?.customer?.customer);
  const order = useSelector((state) => state?.order?.sucessfull);
  const orderDetails = useSelector((state) => state?.order?.order);
  console.log(orderDetails)
  const [selectedTenure, setSelectedTenure] = useState("");

  const [confirmDisable, setConfirmDisable] = useState(true)
  const [selectedOption, setSelectedOption] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91')
  const [finalNumber, setFinalNumber] = useState(null)
  const [downPayment, setDownPayment] = useState('')
  const [layawayTenure, setLayawayTenure] = useState('')
  const dispatch = useDispatch();





  console.log(customer)





 

  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true)
  const [nextPage, setNextPage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const discountPercentage = useRef(null);
  const discountAmount = useRef(null);
  const layawayOptions = [
    { months: 3, amount: parseFloat((grandTotal / 3).toFixed(2)) },
    { months: 6, amount: parseFloat((grandTotal / 6).toFixed(2)) },
    { months: 9, amount: parseFloat((grandTotal / 9).toFixed(2)) },
    { months: 12, amount: parseFloat((grandTotal / 12).toFixed(2)) },
    { months: 24, amount: parseFloat((grandTotal / 24).toFixed(2)) },
  ];
  const orderData = {
    customerId: customer?._id,
    items: products.map(product => ({ inventoryId: product?._id })),
    discountPercentage: discountPercentage?.current?.value,
  }

  const confirmOrder = () => {
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

  const handleCancelModal = () => {
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

  useEffect(() => {
    if (phoneNumber.replace(/\D/g, "").length === 10) {
      let number = `${countryCode}-${phoneNumber}`
      dispatch(fetchCustomerByNumber(number))
      console.log(customer)
    }
  }, [phoneNumber])

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

  const handleDiscountPercentage = () => {
    const value = discountPercentage.current.value;
    if (value) {
      const percentage = parseFloat(value);
      if (!isNaN(percentage)) {
        const amount = (percentage / 100) * total;
        discountAmount.current.value = `$ ${amount.toFixed(2)}`;
      }
    } else {
      discountAmount.current.value = ""
    }
  }

  const handleAmountChange = () => {
    const value = discountAmount.current.value;
    if (value) {
      const amount = parseFloat(value);
      if (!isNaN(amount)) {
        const percentage = (amount / total) * 100;
        discountPercentage.current.value = percentage.toFixed(2);
      }
    } else {
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


      {open && <CustomerInformation open={open} setOpen={setOpen} />}
      {showModal && <CancelModal isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={() => setShowModal(false)} />}

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

      <main className="max-w-8xl mx-auto px-4 mt-1">
        <div className="flex gap-6">
          <div className="flex-1">

            <div className="bg-white p-6 rounded-lg shadow-sm h-100vh">
              <div className="flex gap-4 mb-6">
                <button className="border border-[#ffffff] text-[#5542BA] bg-white border-color" style={{ padding: "10px 24px", backgroundColor: '#221B67', color: 'white', boxShadow: 'none', minWidth: "15%" }} >
                  Sale
                </button>
                <button className="px-4 py-2 text-[#5542BA]  border-color" style={{ padding: "10px 24px", minWidth: "15%" }} >
                  Return
                </button>
                <button className="px-4 py-2 text-[#5542BA]  border-color" style={{ padding: "10px 24px", minWidth: "15%" }} >
                  Repair
                </button>
                <button className="px-4 py-2 text-[#5542BA]  border-color" style={{ padding: "10px 24px", minWidth: "15%" }} >
                  Custom Order
                </button>
                <div className="flex-1" />

              </div>
              <ProductSearch handleChange={() => {}} />


              {/* <Sales products={products} handleDelete={() => {}}/> */}
                <RepairForm/>
            </div>
          </div>
          
          <OrderSummary
      products={products}
      customer={customer}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      grandTotal={grandTotal}
      total={total}
      disable={disable}
      confirmDisable={confirmDisable}
      discountAmount={discountAmount}
      discountPercentage={discountPercentage}
      setGrandTotal={setGrandTotal}
      setDisable={setDisable}
      setConfirmDisable={setConfirmDisable}
      setOpen={setOpen}
      edit={edit}
      layawayOptions={layawayOptions}
      handleCancelModal={handleCancelModal}
      confirmOrder={confirmOrder}
    />
        </div>
      </main>
    </div>
  );
}

export default App;
