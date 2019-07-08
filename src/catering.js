import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./ZAO-CATERING.png";
import { faTruck, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default class Catering extends Component {
  render() {
    return (
      <div className="catering-page-wrapper">
        <div className="cover-letters">CATERING</div>
        <div className="top-picture" />

        <div className="we-deliver">
          <div className="deliver-left">
            <div className="delivery-title">
              <FontAwesomeIcon icon={faTruck} size="lg" />
              <h2> WE DELIVER</h2>
            </div>
            <p>
              Catering orders of $100 or more can be delivered. Large orders
              require 24 hours advanced notice, speak with one of our awesome
              Catering Coordinators for details.
            </p>
          </div>
          <div className="deliver-right">
            <div className="delivery-title">
              <h2>AS A THANK YOU </h2>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" />
            </div>
            <p>Earn 1 FREE meal card for every $100 spent on catering.</p>
          </div>
        </div>
        <div className="beginning-catering-form">
          <div className="catering-button">
            <a href="*">
              <button className="order-online-catering">
                VIEW CATERING MENU
              </button>
            </a>
          </div>
          <div className="catering-body">
            <h1>TO INQUIRE ABOUT CATERING</h1>
            Please call your nearest store OR e-mail your phone number, date you
            would like to schedule, and your request to:
            <div className="email-wrapper">
              <a
                href="mailto:catering@zaoasiancafe.com?Subject=Catering Order"
                target="_top"
                className="catering-email"
              >
                catering@zaoasiancafe.com
              </a>
            </div>
            <div className="catering-incoming">
              Our catering form is undergoing some renovations, we are excited
              to present it to you soon!
            </div>
            <div>
              <img
                src={require("./ZAO-CATERING.png")}
                alt={"catering"}
                className="catering-menu-picture"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
