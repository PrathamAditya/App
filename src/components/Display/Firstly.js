import React,{useState} from "react";
import classes from "./Firstly.module.css";
import Footer from "./Footer.js";
import Form from "./Form/Form.js";
import Stocks from "./Stocks/Stocks.js";
const Firstly = () => {
  const [data, setData] = useState([{}]);
  function getData(stdata){
    setData(stdata);
    console.log(stdata);
  }
  console.log(typeof(data));
  return (
    <React.Fragment>
      <div className={`${classes.card}`}>
      <h2>Hey! Welcome here ツ</h2>
        <Form 
          parentsgetData={getData}
        />
      </div>
      <Stocks />
      <Footer />
    </React.Fragment>
  );
};

export default Firstly;
