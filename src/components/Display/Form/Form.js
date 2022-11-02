import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
const submitHandler = (event) => {
  event.preventDefault();
};

const Form = (props) => {
  const [data, setData] = useState([{}]);
  const [stock, setStock] = useState("");
  const [date, setDate] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // props.parentsgetData(stock);
    const apiurl = "/" + stock + "&date=" + date;
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        props.parentsgetData(data);
      });
    setStock("");
    setDate("");
  }, [count]);

  return (
    <div>
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
          <div className={classes["button-52-main"]}>
            <button className={classes["button-52"]}>Stock Price</button>
            <button className={classes["button-52"]}>Indicator</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
