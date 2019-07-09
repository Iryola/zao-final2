import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "./Chalkboard_Seamless.jpg";

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="menu-page-wrapper">
          <div className="menu-button-wrapper">
            <div className="top-two-buttons">
              <NavLink exact to="/tacos" activeClassName="nav-link-active">
                <button className="menu-button">Tacos</button>
              </NavLink>
              <NavLink exact to="/bowls" activeClassName="nav-link-active">
                <button className="menu-button">Rice Bowls</button>
              </NavLink>
            </div>
            <div className="bottom-three-buttons">
              <NavLink exact to="/bahnmi" activeClassName="nav-link-active">
                <button className="menu-button">Bahn Mi</button>
              </NavLink>
              <NavLink exact to="/salads" activeClassName="nav-link-active">
                <button className="menu-button">Salads</button>
              </NavLink>
              <NavLink exact to="/soup" activeClassName="nav-link-active">
                <button className="menu-button">Soup</button>
              </NavLink>
            </div>
          </div>
          <div className="menu-header">
            <h4 className="power-of">THE POWER OF CHOICE</h4>
            <h4 className="customize-your">
              Customize your <span>meal</span> to fit your tastes.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
