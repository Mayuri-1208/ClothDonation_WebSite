import React, { useState } from "react";
import "../donation/Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    fullName: "",
    location: "",
    category: "",
    quantity: "",
    details: "",
    specificNgo: false,
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      if (file) setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you! Your donation form has been submitted.");
  };

  return (
    <div className="donation-form-wrapper">
      <div className="donation-form-container">
        <h2>🤝 Confirm Your Donation</h2>
        <p className="subtitle">
          Fill out the form below and help us make a difference ❤️
        </p>
        <form onSubmit={handleSubmit} className="donation-form">
          <div className="form-row">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="location"
            placeholder="Enter your location / city"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Donation Category</option>
              <option value="clothes">Clothes</option>
              <option value="furniture">Furniture</option>
              <option value="food">Food</option>
              <option value="appliances">Appliances</option>
              <option value="other">Other</option>
            </select>

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="details"
            placeholder="Additional donation details (optional)"
            value={formData.details}
            onChange={handleChange}
          ></textarea>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="specificNgo"
              checked={formData.specificNgo}
              onChange={handleChange}
            />
            I want to donate to a specific NGO
          </label>

          <div className="file-upload">
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleChange}
            />
            <label htmlFor="image" className="upload-label">
              📷 Upload Donation Item Image
            </label>
            {preview && (
              <img src={preview} alt="Preview" className="preview-img" />
            )}
          </div>

          <button type="submit" className="submit-btn">
            ✅ CONFIRM DONATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
