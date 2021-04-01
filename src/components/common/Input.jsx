import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} {...rest} />
      {error && (
        <div className="invalid-feedback" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
