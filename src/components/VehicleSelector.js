import React from "react";
import { vehicleList } from "../lib/vehicleList";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function VehicleSelector({ formData, handleChange }) {
  const uniqueYears = [...new Set(vehicleList.map((vehicle) => vehicle.year))];
  const filteredYear = vehicleList.filter(
    (vehicle) => vehicle.year === formData.yearSelection
  );

  return (
    <>
      <div>
        <h3>Vehicle Selection</h3>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="yearSelection">Year</InputLabel>
          <Select
            required
            labelId="yearSelection"
            id="yearSelection"
            name="yearSelection"
            autoWidth
            value={formData.yearSelection}
            label="Year"
            onChange={handleChange}
          >
            {uniqueYears.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <br />
        <br />
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="vehicleSelection">Vehicle</InputLabel>
          <Select
            required
            labelId="vehicleSelection"
            id="vehicleSelection"
            autoWidth
            name="vehicleSelection"
            value={formData.vehicleSelection}
            label="Vehicle"
            onChange={handleChange}
          >
            {filteredYear.map((vehicle, i) => (
              <MenuItem key={i} value={vehicle.make}>
                {vehicle.make} {vehicle.model} {vehicle.engine_size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default VehicleSelector;
