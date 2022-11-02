import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
const submitHandler = (event) => {
  event.preventDefault();
}

const Form = (props) => {
  const [data, setData] = useState([{}]);
  const [stock, setStock] = useState('');
  const [date, setDate] = useState('');
  const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(stock);
      // props.parentsgetData(stock);
      const apiurl = '/' + stock + '&date=' + date;
      fetch(apiurl).then(  
        res => res.json()
      ).then(
        data => {
          setData(data);
          console.log(data);
          props.parentsgetData(data);
        }
      )
      setStock('');
      setDate('');
      
    }, [count])
  
  return (
<<<<<<< HEAD
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
=======
    <React.Fragment>
      <form onSubmit={submitHandler} className={classes.mainclass}>
        <label type="text" className={classes.stockname}>
          Stock Name:
        </label>
        <input type="text" onChange={event => setStock(event.target.value)} value={stock}></input>
        <input type="date" className={classes.startdate} onChange={event => setDate(event.target.value)} value={date}></input>
        <input type="submit" onClick={() => setCount(count + 1)} value="Submit"></input>
>>>>>>> 94895efd6f2ac3edffc5c2f513f53b35df6ec3c8
      </form>
      {/* <Card 
        stockdata={data}
      /> */}
    </React.Fragment>
  );
};

export default Form;
