import React,{useState,useEffect} from "react";
import classes from "./Stock.module.css";
import { trackPromise } from 'react-promise-tracker';
const Stocks = (props) => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const apiurl = "/" + props.name + "&&date=" + props.date;
    trackPromise(
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        props.parentsgetData(data);
      }));  
  }, [props.name, props.date]);
  return (
    <React.Fragment>
      <div className={classes["main"]}>
        <h1>{data.name}</h1>
        <p>{data.info}</p>
      </div>
    </React.Fragment>
  );
};
export default Stocks;
