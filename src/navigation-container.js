import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "./Zao-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faTwitter, faInstagram);

const NavigationContainer = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };
  return (
    <div className="nav-bar">
      <div className="left-side">
        <NavLink exact to="/" activeClassName="nav-link-active">
          <img
            src={require("./Zao-Logo.png")}
            alt={"logo"}
            className="logo-image"
          />
        </NavLink>
      </div>
      <div />
      <div className="right-side">
        <div className="nav-items">
          <NavLink exact to="/order" activeClassName="nav-link-active">
            <button className="order-online-nav nav-items">Order Online</button>
          </NavLink>
        </div>
        <div className="nav-items">
          <a
            href="https://www.doordash.com/store/zao-asian-cafe-cottonwood-heights-130010/"
            target="_blank"
          >
            <img
              src={require("./doordashbutton.png")}
              alt={"logo"}
              className="logo-image-doordashbutton"
            />
          </a>
        </div>
        <div className="nav-items">
          <NavLink to="/menu" activeClassName="nav-link-active">
            MENU
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink to="/locations" activeClassName="nav-link-active">
            LOCATIONS
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink to="/catering" activeClassName="nav-link-active">
            CATERING
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink to="/livezaofully" activeClassName="nav-link-active">
            LIVE ZAOFULLY&trade;
          </NavLink>
        </div>
        <div className="socials">
          <a
            href="https://www.facebook.com/zaoasiancafe/"
            className="nav-items"
          >
            <FontAwesomeIcon icon={faFacebook} size="sm" />
          </a>
          <a
            href="https://twitter.com/zaoasiancafe?lang=en"
            className="nav-items"
          >
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </a>
          <a
            href="https://www.instagram.com/zaoasiancafe/?hl=en"
            className="nav-items"
          >
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationContainer);
