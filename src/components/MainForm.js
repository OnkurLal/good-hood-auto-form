import React from "react";
import { useState } from "react";
import ServiceSelector from "./ServiceSelector";
import VehicleSelector from "./VehicleSelector";
import ContactInfo from "./ContactInfo";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function MainForm(props) {
  const [formData, setFormData] = useState({
    serviceSelection: [],
    yearSelection: "",
    vehicleSelection: "",
    name: "",
    email: "",
    phone: "",
  });
  const [step, setStep] = useState(1);

  const handleNext = (event) => {
    event.preventDefault();
    const form = event.currentTarget.form;
    if (form.checkValidity()) {
      setStep(step + 1);
    } else {
      form.reportValidity();
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const stepTracker = () => {
    switch (step) {
      case 1:
        return (
          <ServiceSelector
            formData={formData}
            handleChange={handleChange}
            required
          />
        );
      case 2:
        return (
          <VehicleSelector
            formData={formData}
            handleChange={handleChange}
            required
          />
        );
      case 3:
        return (
          <ContactInfo
            formData={formData}
            handleChange={handleChange}
            required
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const validPhone = /^\d{3}-\d{3}-\d{4}$/.test(formData.phone);
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      const validName = /^[a-zA-Z ]+$/.test(formData.name);

      if (validPhone && validEmail && validName) {
        console.log(formData);
      } else {
        if (!validName) {
          alert("Please enter a valid name (only letters and spaces allowed)");
        } else if (!validPhone) {
          alert("Please enter a valid phone number (xxx-xxx-xxxx)");
        } else if (!validEmail) {
          alert("Please enter a valid email address");
        }
      }
    } else {
      form.reportValidity();
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {stepTracker()}
          <br />
          <br />

          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {step > 1 && step < 4 ? (
              <Button name="previous" onClick={handlePrevious}>
                Previous
              </Button>
            ) : null}
            {step < 3 && step > 0 ? (
              <Button name="next" onClick={handleNext}>
                Next
              </Button>
            ) : null}
            {step === 3 ? (
              <Button type="submit" name="submit">
                Submit
              </Button>
            ) : null}
          </ButtonGroup>
        </form>
      </div>
    </>
  );
}

export default MainForm;
