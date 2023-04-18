import React from "react";
import TextField from "@mui/material/TextField";

function ContactInfo(props) {
  return (
    <>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          type="text"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </div>
    </>
  );
}

export default ContactInfo;
