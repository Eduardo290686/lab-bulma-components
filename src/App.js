import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/Formfield";
import Button from "./button/Button";
import 'bulma/css/bulma.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="form">
          <Formfield label="Name" type="text" placeholder="Your name"></Formfield>
          <Formfield label="Email" type="email" placeholder="Your email"></Formfield>
          <Formfield label="Password" type="password" placeholder="Your password"></Formfield>
          <Button buttonClass="button is-success right-button" buttonText="Submit"></Button>
        </div>
      </React.Fragment>
    );
  }
};

export default App;
