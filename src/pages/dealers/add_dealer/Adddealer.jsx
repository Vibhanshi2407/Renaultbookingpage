import { useState } from "react";
import "./adddealer.css";

function AddDealer({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;
  const pincodeRegex = /^[0-9]{6}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile" && !/^\d*$/.test(value)) {
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

 
    if (!form.name.trim()) {
      newErrors.name = "Dealer name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!pincodeRegex.test(form.pincode)) {
      newErrors.pincode = "Enter valid 6 digit pincode";
    }

    if (!form.city) {
      newErrors.city = "Select a city";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Dealer Added Successfully");
      console.log(form);
    }
  };

  // Clear form
  const handleCancel = () => {
    setForm({
      name: "",
      email: "",
      mobile: "",
      address: "",
      pincode: "",
      city: "",
    });

    setErrors({});

    if (onClose) {
      onClose();
    }
  };


  return (
    <div className="form-card">
      <h2>Add New Dealer</h2>
      <p>*required fields. maximum character limit is 35</p>

      <form onSubmit={handleSubmit}>
        
        {/* Dealer Name */}
        <input
          type="text"
          name="name"
          placeholder="Dealer Name *"
          value={form.name}
          onChange={handleChange}
          maxLength={35}
        />
        <p>{errors.name}</p>

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        {/* Mobile */}
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number *"
          value={form.mobile}
          onChange={handleChange}
          maxLength={10}
        />
        <p>{errors.mobile}</p>

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Address *"
          value={form.address}
          onChange={handleChange}
        />
        <p>{errors.address}</p>

        {/* Pincode */}
        <input
          type="text"
          name="pincode"
          placeholder="Pin Code *"
          value={form.pincode}
          onChange={handleChange}
        />
        <p>{errors.pincode}</p>

        {/* City */}
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
        >
          <option value="">City *</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Udaipur">Udaipur</option>
        </select>
        <p>{errors.city}</p>

        {/* Buttons */}
        <div className="button-group">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>

          <button type="submit">
            Add Dealer
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDealer;