import React from "react";
import { PopularServices } from "../lib/popularServices";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function ServiceSelector(props) {
  return (
    <>
      <div>
        <h3>Step 1</h3>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
          <InputLabel shrink htmlFor="serviceSelection">
            Service Selection
          </InputLabel>
          <Select
            multiple
            native
            required
            label="Service Selection"
            inputProps={{
              id: "serviceSelection",
            }}
          >
            {PopularServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default ServiceSelector;
