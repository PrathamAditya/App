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
=======
    <React.Fragment>
      <form onSubmit={submitHandler} className={classes.mainclass}>
        <label type="text" className={classes.stockname}>
          Stock Name:
        </label>
        <input type="text" onChange={event => setStock(event.target.value)} value={stock}></input>
        <input type="date" className={classes.startdate} onChange={event => setDate(event.target.value)} value={date}></input>
        <input type="submit" onClick={() => setCount(count + 1)} value="Submit"></input>
      </form>
      {/* <Card 
        stockdata={data}
      /> */}
    </React.Fragment>
>>>>>>> ae0f215 (more)
  );
};

export default Form;
