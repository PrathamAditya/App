import React from "react";
import classes from "./Form.module.css";

const submitHandler = (event) => {
  console.log(event.target);
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
          <input type="text" name="" required=""></input>
          <label>Project's Website</label>
        </div>
        <div className={classes["userbox date"]}>
          <input type="date" value="" />
        </div>
        {/* <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>Project's Twitter</label>
        </div>
        <div class="user-box">
          <input type="email" name="" required=""></input>
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required=""></input>
          <label>No. of Whitelists</label>
        </div> */}
        <a href="#">Submit</a>
      </form>
    </div>
  );
};

export default Form;
