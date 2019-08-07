import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import Pdf from "./ZAO-TakeOutMenu.pdf";
import logo from "./Chalkboard_Seamless.jpg";

// var element = document.getElementsByClassName("power-of");
// const handleScroll = () => {
//   element.scrollIntoView;
// };

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu-page-wrapper">
          <div className="menu-button-wrapper">
            <div className="cover-letters-menu">Select one and scroll down</div>
            <div className="top-two-buttons">
              <NavLink to="/bowls" className="nav-link-active">
                <img
                  src={require("./ricebowl5.png")}
                  alt={"logo"}
                  className="menu-button-rice"
                />
                <div className="cover-letters-menu-items">BOWLS</div>
              </NavLink>

              <NavLink exact to="/tacos" activeClassName="nav-link-active">
                <img
                  src={require("./Tacos.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">TACOS</div>
              </NavLink>
            </div>

            <div className="bottom-three-buttons">
              <NavLink exact to="/banhmi" activeClassName="nav-link-active">
                <img
                  src={require("./BahnMi.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">BANH MI</div>
              </NavLink>
              <NavLink exact to="/salads" activeClassName="nav-link-active">
                <img
                  src={require("./Salad.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">SALAD</div>
              </NavLink>
              <NavLink exact to="/soup" activeClassName="nav-link-active">
                <img
                  src={require("./Soup1.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">SOUP</div>
              </NavLink>
            </div>
          </div>
          <div className="menu-header">
            <h4 className="power-of" id="power-of">
              the power of choice
            </h4>
            <h4 className="customize-your">
              customize your <span>MEAL</span> to fit your tastes.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
