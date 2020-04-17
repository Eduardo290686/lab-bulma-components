import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";
import Button from "./button/Button";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Formfield firstLabel="Name" secondLabel="Password"></Formfield>
      </React.Fragment>
    );
  }
};

export default App;
