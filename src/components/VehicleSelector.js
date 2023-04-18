import React from "react";
import { VehicleList } from "../lib/vehicleList";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function VehicleSelector(props) {
  const [year, setYear] = React.useState("");
  const [vehicleSelection, setVehicleSelection] = React.useState("");

  const handleChange = (event) => {
    if (event.target.name === "yearSelection") {
      setYear(event.target.value);
    }
    if (event.target.name === "vehicleSelection") {
      setVehicleSelection(event.target.value);
    }
    console.log(event);
  };

  const filteredYear = VehicleList.filter((vehicle) => vehicle.year === year);

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
              labelId="yearSelection"
              id="yearSelection"
              name="yearSelection"
              value={year}
              label="Year"
              onChange={handleChange}
            >
              {VehicleList.map((vehicle, i) => (
                <MenuItem key={i} value={vehicle.year}>
                  {vehicle.year}
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
              labelId="vehicleSelection"
              id="vehicleSelection"
              name="vehicleSelection"
              value={vehicleSelection}
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
