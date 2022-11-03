import React, { useState } from "react";
import classes from "./Firstly.module.css";
import Footer from "./Footer.js";
import Form from "./Form/Form.js";
import Stocks from "./Stocks/Stocks.js";
import { usePromiseTracker } from "react-promise-tracker";
import ReactLoading from 'react-loading';
const Firstly = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  function getData(stname, stdate) {
    setName(stname);
    setDate(stdate);
  }
  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
      promiseInProgress &&
      <div className={classes["loader"]}>
        <ReactLoading type={"bubbles"} color={"#2c3f66"} height={500} width={200} />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div>
        <Form parentsgetData={getData} />
      </div>
      {/* {data?} */}
      <LoadingIndicator/>
      <Stocks
        name={name}
        date={date}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Firstly;
