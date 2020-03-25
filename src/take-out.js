import React, { Component } from "react";
import img from "./onlinemenu.pdf";

class Download extends Component {
  render() {
    return (
      <div className="menu-take-out">
        <a href={img}>Download Pdf</a>
      </div>
    );
  }
}

export default Download;
