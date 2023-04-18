import React from "react";
import ServiceSelector from "./ServiceSelector";
import VehicleSelector from "./VehicleSelector";
import ContactInfo from "./ContactInfo";

function MainForm(props) {
  return (
    <>
      <div>
        <form>
          <h3>Step 1</h3>
          <ServiceSelector />
          <h3>Step 2</h3>
          <VehicleSelector />
          <h3>Step 3</h3>
          <ContactInfo />
        </form>
      </div>
    </>
  );
}

export default MainForm;
