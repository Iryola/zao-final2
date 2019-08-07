import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./ZAO-CATERING.png";
import {
  faTruck,
  faThumbsUp,
  faHandPointRight
} from "@fortawesome/free-solid-svg-icons";

export default class Catering extends Component {
  render() {
    return (
      <div className="catering-page-wrapper">
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
            <a href={img}>
              Download Take Out Menu
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
                <FontAwesomeIcon icon={faHandPointRight} size="sm" />
                catering@zaoasiancafe.com
              </a>
            </div>
            <div className="catering-incoming">
              Our catering form is undergoing some renovations, we are excited
              to present it to you soon!
            </div>
            <div className="catering-contact-container">
              <div className="catering-contacts">
                <div className="catering-contact">
                  DOWNTOWN
                  <span>
                    <a href="tel:+8015951234">(801)595-1234</a>
                  </span>
                </div>
                <div className="catering-contact">
                  SUGARHOUSE
                  <span>
                    <a href="tel:+8014674113">(801)467-4113</a>
                  </span>
                </div>
                <div className="catering-contact">
                  MURRAY
                  <span>
                    <a href="tel:+8012902797">(801)290-2797</a>
                  </span>
                </div>
              </div>
              <div className="catering-contacts2">
                <div className="catering-contact">
                  FT. UNION
                  <span>
                    <a href="tel:+8015664454">(801)566-4454</a>
                  </span>
                </div>
                <div className="catering-contact">
                  SANDY
                  <span>
                    <a href="tel:+8015237676">(801)523-7676</a>
                  </span>
                </div>
                <div className="catering-contact">
                  LEHI
                  <span>
                    <a href="tel:+8013318779">(801)331-8779</a>
                  </span>
                </div>
              </div>
              <div className="catering-contacts3">
                <div className="catering-contact">
                  OREM
                  <span>
                    <a href="tel:+8012240030">(801)224-0030</a>
                  </span>
                </div>
                <div className="catering-contact">
                  BOUNTIFUL
                  <span>
                    <a href="tel:+8018130777">(801)813-0777</a>
                  </span>
                </div>
                <div className="catering-contact">
                  DISTRICT
                  <span>
                    <a href="tel:+8013078888">(801)307-8888</a>
                  </span>
                </div>
              </div>
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
