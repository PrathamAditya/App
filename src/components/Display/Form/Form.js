import React from "react";
import classes from "./Form.module.css";

const submitHandler = (event) => {
  console.log(event.target);
  event.preventDefault();
};

const Form = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={classes.mainclass}>
        <label type="text" className={classes.stockname}>
          StockName:
        </label>
        <input type="text"></input>
        <input type="date" className={classes.startdate}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </React.Fragment>
  );
};

export default Form;
