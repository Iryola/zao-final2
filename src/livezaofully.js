import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Livezaofully extends Component {
  render() {
    return (
      <div>
        <div className="livezaofully-wrapper">
          <div className="livezaofully-top-picture-wrapper">
            <div className="livezaofully-top-text">LIVE ZAOFULLY</div>
            <div className="livezaofully-bottom-text">
              a place for mindfullness
            </div>
          </div>
          <div className="blog-item-anniversary">
            <NavLink to="/fiveyearanniversary" className="nav-link-active">
              <div className="blog-header-anniversary">
                5 YEAR ANNIVERSARY PROMOTION
              </div>
              <div className="blog-content-anniversary">
                <div className="anniversary-paragraph">
                  We are so excited to be celebrating our 5 year anniversary and
                  it’s because of YOU!
                </div>
                <div className="anniversary-paragraph">
                  We are deeply grateful to you for all of your support and
                  kindness. Because of it, we are excited to announce a special
                  promotion to both celebrate and give back to our guests.
                </div>
                <div className="anniversary-paragraph">
                  Every time you place an ONLINE ORDER (logged into your
                  account), until Sept 30th, you will be entered for a chance to
                  win
                  <span className="bold"> FREE</span> Zao for an
                  <span className="bold"> ENTIRE YEAR</span>.
                  <div className="link-text">
                    Click this banner for more details
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="blog-wrapper">
            <div className="blog-item">
              <div className="blog-header" />
              <div className="blog-content" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
