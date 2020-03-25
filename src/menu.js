import React, { Component } from "react";
import { withRouter } from "react-router";
//import { NavLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Pdf from "./ZAO-TakeOutMenu.pdf";
import logo from "./Chalkboard_Seamless.jpg";
import img from "./onlinemenu.pdf";
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
            <div className="start-with-text" style={{ height: "70px" }}>
              <a
                href={img}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderBottom: "1px solid" }}
              >
                Download Take Out Menu
              </a>
            </div>
            <div className="top-two-buttons">
              <NavLink smooth to="/bowls#start" className=" ">
                <img
                  src={require("./ricebowl5.png")}
                  alt={"logo"}
                  className="menu-button-rice"
                />
                <div className="cover-letters-menu-items">BOWLS</div>
              </NavLink>

              <NavLink smooth exact to="/tacos#start" activeClassName=" ">
                <img
                  src={require("./Tacos.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">TACOS</div>
              </NavLink>
            </div>

            <div className="bottom-three-buttons">
              <NavLink smooth exact to="/banhmi#start" activeClassName=" ">
                <img
                  src={require("./BahnMi.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">BANH MI</div>
              </NavLink>
              <NavLink smooth exact to="/salads#start" activeClassName=" ">
                <img
                  src={require("./Salad.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">SALAD</div>
              </NavLink>
              <NavLink smooth exact to="/soup#start" activeClassName=" ">
                <img
                  src={require("./Soup1.png")}
                  alt={"logo"}
                  className="menu-button"
                />
                <div className="cover-letters-menu-items">SOUP</div>
              </NavLink>
            </div>
          </div>
          <div className="menu-header" id="start">
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
