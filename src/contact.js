import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-page-wrapper">
          <div className="cover-letters-contact">CONTACT US</div>
          <div className="cover-letters-contact2">
            WE WOULD LOVE TO RECEIVE YOUR FEEDBACK
          </div>
          <div className="contact-content">
            <div className="contact-image">
              <img
                src={require("./ZaoLehi.png")}
                alt={"logo"}
                className="contact-image-2"
              />
            </div>

            <div className="email-wrapper-contact">
              <a
                href="mailto:info@zaoasiancafe.com?Subject=Contact Feedback"
                target="_top"
                className="email-wrapper-contact-link"
              >
                <FontAwesomeIcon icon={faHandPointRight} size="sm" />
                info@zaoasiancafe.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
