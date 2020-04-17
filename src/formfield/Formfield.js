import React, { Component } from "react";
import "./Formfield.css";
import 'bulma/css/bulma.css';

class Formfield extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="form">
          <div className="field">
            <label className="label">{this.props.firstLabel}</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>
          <div className="field">
            <label className="label">{this.props.secondLabel}</label>
            <div className="control">
              <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Formfield;
