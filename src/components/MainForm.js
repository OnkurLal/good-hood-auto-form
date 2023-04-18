import React from "react";
import ServiceSelector from "./ServiceSelector";
import VehicleSelector from "./VehicleSelector";
import ContactInfo from "./ContactInfo";

function MainForm(props) {
  return (
    <>
      <div>
        <form>
          <ServiceSelector />
          <VehicleSelector />
          <ContactInfo />
        </form>
      </div>
    </>
  );
}

export default MainForm;
