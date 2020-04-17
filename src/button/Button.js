import React, { Component } from "react";
import 'bulma/css/bulma.css';

class Button extends Component {
  render() {
    return (
    <button className={this.props.buttonClass}>{this.props.buttonText}</button>
    );
  }
};

export default Button;
