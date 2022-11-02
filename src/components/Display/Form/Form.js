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
  );
};

export default Form;
