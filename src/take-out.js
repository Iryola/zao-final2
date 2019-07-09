import React, { Component } from "react";
import Pdf from "./ZAO-TakeOutMenu.pdf";

class Download extends Component {
  render() {
    return (
      <div className="menu-take-out">
        <a href={Pdf} target="_blank">
          Download Pdf
        </a>
      </div>
    );
  }
}

export default Download;
