import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import CountrySelect from "./CountrySelect";
import SiteSignInLogo from "../../images/amazon-logo-02.png";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const { data } = this.state;

    if (data.name?.trim() === "") errors.name = "Name is required.";

    if (data.email?.trim() === "") errors.email = "Email is required.";
    else if (!data.email.trim().match(emailRegex))
      errors.email = "Please provide a valid email address.";

    if (data.password?.trim() === "") errors.password = "Password is required.";
    else if (data.password?.trim().length <= 5)
      errors.password = "Password must be at least 6 characters.";

    if (data.address?.trim() === "") errors.address = "Address is required.";

    if (data.zipcode?.trim() === "") errors.zipcode = "Zip Code is required.";

    if (data.city?.trim() === "") errors.city = "City is required.";

    if (data.state?.trim() === "") errors.state = "State is required.";

    if (data.country?.trim() === "") errors.country = "Country is required.";

    if (data.phonenumber?.trim() === "")
      errors.phonenumber = "Phone number is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Your name is required.";
    }

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (value.trim() === "") return "Email is required.";

      if (!value.trim().match(emailRegex))
        return "Please provide a valid email address.";
    }

    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
      else if (value.trim().length <= 5)
        return "Password must be at least 6 characters.";
    }

    if (name === "address") {
      if (value.trim() === "") return "Address is required.";
    }

    if (name === "zipcode") {
      if (value.trim() === "") return "Zip Code is required.";
    }

    if (name === "city") {
      if (value.trim() === "") return "City is required.";
    }

    if (name === "state") {
      if (value.trim() === "") return "State is required.";
    }

    if (name === "phonecnumber") {
      if (value.trim() === "") return "Phone number is required.";
    }

    if (name === "country") {
      if (value.trim() === "") return "Country is required.";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderSiteLogo = () => {
    return (
      <Link className="form-logo-link" to="/">
        <img className="form-logo-img" src={SiteSignInLogo} alt="" />
      </Link>
    );
  };

  renderFormTitle = (label) => {
    return <legend>{label}</legend>;
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderCountrySelect = (name, label) => {
    const { data, errors } = this.state;
    return (
      <CountrySelect
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSubmitBotton = (label) => {
    return (
      <button className="btn-primary" type="submit">
        {label}
      </button>
    );
  };

  renderRecoveryLink = (label) => {
    return (
      <Link className="recovery-link" to="/">
        {label}
      </Link>
    );
  };

  renderFormNotice = (
    itemOneText,
    itemOneLinkOneText,
    itemOneLinkTwoText,
    itemOneLinkOnePath,
    itemTwoLinkTwoPath,
    itemTwoLinkText,
    itemTwoLinkPath,
    itemTwoText = ""
  ) => {
    return (
      <div className="form-notice">
        <div>
          {itemOneText}{" "}
          <Link to={itemOneLinkOnePath}>{itemOneLinkOneText}</Link> and{" "}
          <Link to={itemTwoLinkTwoPath}> {itemOneLinkTwoText} </Link>.
        </div>
        <div>
          {itemTwoText && itemTwoText}{" "}
          <Link to={itemTwoLinkPath}>{itemTwoLinkText}</Link>
        </div>
      </div>
    );
  };

  renderCreateAccount = (label, buttonText, history) => {
    return (
      <>
        <div className="new-to">{label}</div>
        <button
          onClick={() => history.push("/register")}
          className="btn-secondary create-acct-btn"
        >
          {buttonText}
        </button>
      </>
    );
  };

  renderFormFooter = (
    linkOneText,
    linkTwoText,
    linkThreeText,
    linkOnePath,
    linkTwoPath,
    linkThreePath,
    copyrightText
  ) => {
    return (
      <footer className="form-footer">
        <div className="content-wrap">
          <div className="form-footer-notice">
            <Link to={linkOnePath}>{linkOneText}</Link>{" "}
            <Link to={linkTwoPath}>{linkTwoText}</Link>{" "}
            <Link to={linkThreePath}>{linkThreeText}</Link>{" "}
          </div>
          <small>&copy; {copyrightText}</small>
        </div>
      </footer>
    );
  };
}

export default Form;
