import  { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { newCustomers, updateCustomer } from '../redux/Customer/CustomerSlice';

function CustomerInformation({ open, setOpen }) {
  const customer = useSelector((state) => state?.customer?.customer);
  const successful = useSelector((state)=>state?.customer?.successful);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      pinCode: '',
      landmark: '',
    },
    alternatePhone: '',
  });

  // Populate form data when customer is available
  useEffect(() => {
    if (customer) {
      setFormData({
        phone: customer.phone || '',
        name: customer.name || '',
        email: customer.email || '',
        address: {
          street: customer.address?.street || '',
          city: customer.address?.city || '',
          state: customer.address?.state || '',
          pinCode: customer.address?.pinCode || '',
          landmark: customer.address?.landmark || '',
        },
        alternatePhone: customer.alternatePhone || '',
      });
    }
  }, [customer]);

  // Handle input changes, including nested address fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      // Handle nested address fields
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else {
      // Handle other fields
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateCustomer({ customerId: customer?._id, customerData: formData }));
    if(customer && Object.keys(customer).length === 0 ){
      dispatch(newCustomers({customerData : formData}))
    }
    if(successful){
      setOpen(!open)
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="rounded-lg shadow-lg w-full max-w-2xl p-8 relative"
           style={{ background: 'linear-gradient(360deg, rgba(255, 255, 255, 3) 0%, rgba(240, 240, 254, 1) 100%)' }}>
        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600" onClick={() => setOpen(!open)}>
          <X size={24} />
        </button>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Customer Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 pt-4">Address Detail</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleChange}
                  placeholder="Enter Street Address"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City/District/Town</label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  placeholder="Enter City/District/Town"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                <input
                  type="text"
                  name="address.pinCode"
                  value={formData.address.pinCode}
                  onChange={handleChange}
                  placeholder="Enter Pin Code"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Landmark <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="address.landmark"
                  value={formData.address.landmark}
                  onChange={handleChange}
                  placeholder="Enter Landmark"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternative Mobile Number <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  placeholder="Enter Alternative Mobile Number"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerInformation;
