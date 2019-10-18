import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Anniversarybanner extends Component {
  render() {
    return (
      <div className="banner-wrapper">
        <NavLink
          to="Fiveyearanniversary"
          className="nav-link-active-anniversary-banner"
        >
          <div className="banner-details">
            ZAO ASIAN CAFE is excited to be celebrating our 5 year anniversary
            and it’s because of YOU!
            <div className="banner-details-small-text">
              As a way of saying thank you, click hear to learn how you could
              win Zao for an entire year!
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
