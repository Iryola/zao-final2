import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

export default class Order extends Component {
  render() {
    return (
      <div>
        <div className="order-page-wrapper">
          <div className="order-page-left">
            <h1>ORDERING FOR JUST A FEW?</h1>
            <h3>Skip the line if your order is 14 meals or less.</h3>
            <br />
            <a href="https://zaoasiancafe.brinkpos.net/">
              <button className="order-online-left">ORDER ONLINE</button>
            </a>
          </div>
          <div className="order-page-right">
            <h1>ORDERING FOR MORE THAN 14?</h1>
            <h3>
              Your order qualifies for VIP service & perks from one of our
              talented Catering Ninjas.
            </h3>
            <br />
            <div className="nav-items">
              <NavLink to="/catering" activeClassName="nav-link-active">
                <button className="order-online-right">CATERING</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
