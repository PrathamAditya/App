import React from "react";
import classes from "./Firstly.module.css";
import Footer from "./Footer.js";
import Card from "../UI/Card.js";
import Form from "./Form/Form.js";

const Firstly = (props) => {
  return (
    <React.Fragment>
      <Card>
        {" "}
        <h2>Hey! Welcome here ツ</h2>
        <Form></Form>
      </Card>

      <Footer></Footer>
    </React.Fragment>
  );
};

export default Firstly;
