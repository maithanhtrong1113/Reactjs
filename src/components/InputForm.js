import "./InputForm.css";
import React, { useState } from "react";
const InputForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const senderData = {
      ProductName: name,
      ProductPrice: price,
    };
    props.onSubmitData(senderData); // sender data
    setPrice("");
    setName("");
  };
  return (
    <div className="InputForm">
      <form onSubmit={submitHandler}>
        <label className="lblName">Name</label>
        <input
          type="text"
          className="txtName"
          value={name}
          onChange={nameChangeHandler}
        ></input>
        <label className="lblPrice">Price</label>
        <input
          type="text"
          className="txtPrice"
          value={price}
          onChange={priceChangeHandler}
        ></input>
        <input type="submit" value="Submit" className="btnSubmit"></input>
      </form>
    </div>
  );
};
export default InputForm;
