import React from "react";
import "../../styles/checkout/shipping-detail.css";

const ShippingDetail = ({ data, handleClick }) => {
  return (
    <div className="shipping-detail">
      <h2>Shipping Address</h2>
      <button
        className="edit-btn"
        onClick={handleClick}
        aria-label="Update Shipping Address"
      >
        <span className="fas fa-pen" aria-hidden="true"></span>
      </button>
      <div className="detail-group">
        <strong className="title">Name:</strong>
        <span>{data.name}</span>
      </div>
      <div className="detail-group">
        <strong className="title">Address:</strong>
        <span>
          {data.address}, {data.zipcode}, {data.city}, {data.country}.
        </span>
      </div>
      <div className="detail-group">
        <strong className="title">Mail:</strong>
        <span>{data.email}</span>
      </div>
      <div className="detail-group">
        <strong className="title">Phone:</strong>
        <span>{data.phonenumber}</span>
      </div>
    </div>
  );
};

export default ShippingDetail;
