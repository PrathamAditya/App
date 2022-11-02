import React from "react";
import classes from "./Form.module.css";

const submitHandler = (event) => {
  event.preventDefault();
};

const Form = (props) => {
  return (
    <div className={classes["apply-box"]}>
      {" "}
      <h2>Hey! Welcomeツ</h2>
      <form onSubmit={submitHandler}>
        <div className={classes["user-box"]}>
          <input type="text" name="" required=""></input>
          <label>Stock Name:</label>
        </div>
        <div className={classes["user-box"]}>
          <input type="date" name="" required=""></input>
          <label>Choose Start date:</label>
        </div>
        <div className={classes["two-buttons-main"]}>
          <div className={classes["two-buttons-outer"]}>
            <button className={classes["two-buttons-inner"]}>
              Stock Price
            </button>
          </div>
          <div className={classes["two-buttons-outer"]}>
            <button className={classes["two-buttons-inner"]}>Indicator</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
