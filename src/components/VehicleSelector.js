import React from "react";
import { VehicleList } from "../lib/vehicleList";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function VehicleSelector({ formData, handleChange }) {
  // Get all the unique years from the VehicleList array
  const uniqueYears = [...new Set(VehicleList.map((vehicle) => vehicle.year))];

  const filteredYear = VehicleList.filter(
    (vehicle) => vehicle.year === formData.yearSelection
  );

  return (
    <>
      <div>
        <h3>Step 2</h3>
        <FormControl>
          <div>
            <InputLabel shrink htmlFor="yearSelection">
              Year
            </InputLabel>
            <Select
              required
              labelId="yearSelection"
              id="yearSelection"
              name="yearSelection"
              value={formData.yearSelection}
              label="Year"
              onChange={handleChange}
            >
              {/* Render only the unique years */}
              {uniqueYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </div>
        </FormControl>
        <br />
        <br />
        <FormControl>
          <div>
            <InputLabel shrink htmlFor="vehicleSelection">
              Vehicle
            </InputLabel>
            <Select
              required
              labelId="vehicleSelection"
              id="vehicleSelection"
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
          </div>
        </FormControl>
      </div>
    </>
  );
}

export default VehicleSelector;
