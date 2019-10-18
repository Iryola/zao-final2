import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Fiveyearanniversary extends Component {
  render() {
    return (
      <div className="blog-post-wrapper">
        <div className="blog-post">
          <div className="blog-header-anniversary">
            5 YEAR ANNIVERSARY PROMOTION
          </div>
          <div className="blog-page-content">
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
              Every time you place an ONLINE ORDER (logged into your account),
              until Sept 30th 2019, you will be entered for a chance to win
              <span className="bold"> FREE</span> Zao for an
              <span className="bold"> ENTIRE YEAR</span>. Each of our 9
              locations will have a WINNER. Each winner will receive 52 meals
              for the year.
            </div>
            <div className="anniversary-paragraph">Good Luck! Namaste.</div>
            <div className="anniversary-paragraph">
              <NavLink to="/order" className="nav-link-active-anniversary">
                Here is our online ordering
                <span className="underline">link</span> start entering today!
              </NavLink>
            </div>
            <div className="anniversary-paragraph terms-conditions">
              See below for terms and conditions.
            </div>
            <div className="fiveyearpicture">
              <img
                src={require("./5yearpicture.jpg")}
                alt={"logo"}
                className="fiveyearpicture"
              />
            </div>
            <div className="anniversary-paragraph">
              <span className="small-bold-italics">
                Win Free Zao for a Year:
              </span>
              &#160; Until September 30th, 2019 by 8pm MST you can enter to win
              every time you place an online order. You must create an account
              and be logged in (every time) when submitting your order, for your
              entry to be submitted. There will be a winner for each of the 9
              Zao locations. Winners will be notified by email with instructions
              on how to get their Zao vouchers, by October 15th.
            </div>
            <div className="anniversary-paragraph terms-and-conditions">
              <span className="small-bold-italics">
                Enter to Win Contest Terms and Conditions:
              </span>
              &#160; Winners will be selected randomly and will be notified via
              email. Winners are eligible to win once. Open to US residents
              only, must be at least 18 years old. Only one winner per
              household. Zao employees exempt. No purchase necessary to win.
              Void where prohibited. Entrant hereby gives Zao Asian Cafe
              permission to use Entrant's name, city, state, and contest
              details, if they are the WINNER, in sales and marketing activities
              related to promoting Zao Asian Cafe. Winners will be featured in
              marketing materials including, but not limited to, the Zao Asian
              Cafe website, social networks, press releases, advertisements, and
              other printed and digital publications without any further
              permission, notification or compensation.
            </div>
            <div className="anniversary-paragraph">
              <span className="small-bold-italics">
                To be entered with no purchase
              </span>
              <br />
              Please send a postcard to:
              <br /> Zao Asian Cafe
              <br /> 5284 south commerce drive
              <br /> Suite C-130 <br />
              Murray, UT 84107 <br />
              <br />
              <span className="small-bold-italics">
                With the following information on the letter or postcard
              </span>{" "}
              <br />
              Win Free Zao for a Year
              <br /> Your full name
              <br /> Your email address
              <br /> Your address
            </div>
            <div className="anniversary-paragraph terms-and-conditions">
              <br />
              Submitting your information will automatically add you to our
              promotional email list to inform you of Zao events, promotions and
              giveaways.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
