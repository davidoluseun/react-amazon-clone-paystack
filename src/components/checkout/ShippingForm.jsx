import React from "react";
import "../../styles/checkout/shipping-form.css";

const ShippingForm = ({
  renderFormTitle,
  renderInput,
  renderCountrySelect,
  renderSubmitBotton,
  handleSubmit,
  isLoading,
}) => {
  const submitBtnText = !isLoading ? "Continue" : "Loading...";

  return (
    <form className="shipping-form" onSubmit={handleSubmit} noValidate>
      <fieldset>
        {renderFormTitle("Shipping Address")}

        {renderInput("name", "Name")}
        {renderInput("address", "Street Address")}

        <div className="zip-city">
          {renderInput("zipcode", "Zip Code")}
          {renderInput("city", "City")}
        </div>

        <div className="state-country">
          {renderInput("state", "State")}
          {renderCountrySelect("country", "Country")}
        </div>

        {renderInput("phonenumber", "Phone Number")}
        {renderInput("email", "Email", "email")}

        {renderSubmitBotton(submitBtnText)}
      </fieldset>
    </form>
  );
};

export default ShippingForm;
