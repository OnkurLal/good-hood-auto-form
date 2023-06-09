import React from "react";
import TextField from "@mui/material/TextField";

function ContactInfo({ formData, handleChange }) {
  return (
    <>
      <h3>Contact Information</h3>
      <div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
