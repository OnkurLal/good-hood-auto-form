import React from "react";
import TextField from "@mui/material/TextField";

function ContactInfo(props) {
  return (
    <>
      <h3>Step 3</h3>
      <div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            type="text"
            defaultValue=""
          />
        </div>
        <br></br>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            defaultValue=""
          />
        </div>
        <br></br>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
