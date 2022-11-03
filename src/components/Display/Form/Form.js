import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";


const Form = (props) => {
  const [stock, setStock] = useState("");
  const [date, setDate] = useState("");
  const [count, setCount] = useState(0);
  const submitHandler = (event) => {
    props.parentsgetData(stock, date);
    setDate("");
    setStock("");
    event.preventDefault();
  };
  return (
    <div>
      <div className={classes["apply-box"]}>
        <h2>Hey! Welcomeツ</h2>
        <form onSubmit={submitHandler}>
          <div className={classes["user-box"]}>
            <input type="text" name="" required onChange={event=>setStock(event.target.value)} value={stock}></input>
            <label>Stock Name:</label>
          </div>
          <div className={classes["user-box"]}>
            <input type="date" name="" required="" onChange={event=>setDate(event.target.value)} value={date}></input>
            <label>Choose Start date:</label>
          </div>
          <div className={classes["button-52-main"]}>
            <button type="submit" className={classes["button-52"]}>Stock Price</button>
            <button className={classes["button-52"]}>Indicator</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
