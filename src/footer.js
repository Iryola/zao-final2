import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logo2 from "./Zao-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import logo from "./Zao-Logo.png";

library.add(faFacebook, faTwitter, faInstagram);

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="contact-links">
            <NavLink exact to="/careers" activeClassName="">
              Careers|
            </NavLink>
            <NavLink exact to="/contact" activeClassName="">
              Contact|
            </NavLink>
            <NavLink exact to="/donations" activeClassName="">
              Donations
            </NavLink>
          </div>
          <div className="small-logo">
            <NavLink exact to="/" activeClassName="">
              <img
                src={require("./Zao-Logo.png")}
                alt={"logo"}
                className="logo-image"
              />
            </NavLink>
          </div>

          <div className="social-media">
            <a
              href="https://www.facebook.com/zaoasiancafe/"
              className="nav-items"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://twitter.com/zaoasiancafe?lang=en"
              className="nav-items"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/zaoasiancafe/?hl=en"
              className="nav-items"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
        <div className="rights-reserved">
          <h3 className="reserved-info">
            &#169; 2019 Zao Asian Cafe. All rights reserved.
          </h3>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
