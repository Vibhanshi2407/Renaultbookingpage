import "./editdealer.css"
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DEALERS from "/./src/data/delearData.js";

const CITIES = ["Jaipur", "Delhi", "Mumbai", "Pune", "Kolkata", "Bangalore", "Chennai", "Hyderabad", "Ahmedabad", "Surat", "Chandigarh", "Cochin", "Nashik"];

export default function EditDealer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dealer = DEALERS.find((d) => d.id === id);

  const [form, setForm] = useState({
    name: dealer?.name ?? "",
    email: dealer?.email ?? "",
    mobile: dealer?.mobile ?? "",
    address: "No B/24, Govind Marg, Raja Park",
    pinCode: "302017",
    city: dealer?.city ?? "",
  });

  const [errors, setErrors] = useState({});

  if (!dealer) return <div className="ed-page">Dealer not found.</div>;

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const newErrors = {};

    Object.keys(form).forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });

    if (form.mobile.trim() && !/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

 function handleSave() {
  if (!validate()) {
    alert("Please fix the errors before saving.");
    return;
  }

  alert("Details saved successfully!");
  navigate(`/dealers/${dealer.id}`);
}

  return (
    <div className="ed-page">
      <h2 className="ed-heading">Edit Dealer - {dealer.id}</h2>

      <div className="ed-form">

        {/* Dealer Name */}
        <div className="ed-field">
          <label className="ed-label">Dealer Name *</label>
          <input
            className={`ed-input ${errors.name ? "ed-input--error" : ""}`}
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <span className="ed-error-text">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="ed-field">
          <label className="ed-label">Email *</label>
          <input
            className={`ed-input ${errors.email ? "ed-input--error" : ""}`}
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <span className="ed-error-text">{errors.email}</span>}
        </div>

        {/* Mobile Number */}
        <div className="ed-field">
          <label className="ed-label">Mobile Number *</label>
          <input
            className={`ed-input ${errors.mobile ? "ed-input--error" : ""}`}
            value={form.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            maxLength={10}
          />
          {errors.mobile && <span className="ed-error-text">{errors.mobile}</span>}
        </div>

        {/* Address */}
        <div className="ed-field">
          <label className="ed-label">Address *</label>
          <input
            className={`ed-input ${errors.address ? "ed-input--error" : ""}`}
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          {errors.address && <span className="ed-error-text">{errors.address}</span>}
        </div>

        {/* Pin Code */}
        <div className="ed-field">
          <label className="ed-label">Pin Code *</label>
          <input
            className={`ed-input ${errors.pinCode ? "ed-input--error" : ""}`}
            value={form.pinCode}
            onChange={(e) => handleChange("pinCode", e.target.value)}
            maxLength={6}
          />
          {errors.pinCode && <span className="ed-error-text">{errors.pinCode}</span>}
        </div>

        {/* City */}
        <div className="ed-field">
          <label className="ed-label">City *</label>
          <select
            className={`ed-select ${errors.city ? "ed-input--error" : ""}`}
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
          >
            <option value="">Select City</option>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.city && <span className="ed-error-text">{errors.city}</span>}
        </div>

        {/* Action buttons */}
        <div className="ed-actions">
          <button className="ed-btn-cancel" onClick={() => navigate(`/dealers/${dealer.id}`)}>
            Cancel
          </button>
          <button className="ed-btn-save" onClick={handleSave}>
            Save Details
          </button>
        </div>

      </div>
    </div>
  );
}
