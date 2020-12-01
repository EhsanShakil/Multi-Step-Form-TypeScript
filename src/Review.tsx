import React from "react";
import "./App.css";
const Review = ({ values, submit }: any) => {
  console.log(values);
  return (
    <div className="form">
      <h1>Review</h1>
      <p>First Name: {values.first_name}</p>
      <p>Last Name: {values.last_name}</p>
      <p>Address: {values.address}</p>
      <p>City: {values.city}</p>
      <p>Zip Code: {values.zip_code}</p>
      <p>Card Number: {values.Card_Number}</p>
      <p>CVV: {values.CVV}</p>
      <p>Expiry Date: {values.Expiry_Date}</p>
      <button type="submit" onClick={() => submit(3)}>Confirm</button>
    </div>
  );
};

export default Review;
