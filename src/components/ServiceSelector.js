import React from "react";
import { popularServices } from "../lib/popularServices";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function ServiceSelector({ formData, handleChange }) {
  const handleServiceSelectionChange = (event) => {
    handleChange({
      target: {
        name: "serviceSelection",
        value: event.target.value,
      },
    });
  };

  return (
    <div>
      <h3>Service Selection</h3>
      <FormControl sx={{ m: 1, minWidth: 300, maxWidth: "auto" }}>
        <InputLabel id="serviceSelection-label" shrink>
          Service Selection
        </InputLabel>
        <Select
          labelId="serviceSelection-label"
          id="serviceSelection"
          multiple
          required
          value={formData.serviceSelection}
          onChange={handleServiceSelectionChange}
          renderValue={(selected) => (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ margin: 2 }} />
              ))}
            </div>
          )}
        >
          {popularServices.map((service) => (
            <MenuItem key={service} value={service}>
              {service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ServiceSelector;
