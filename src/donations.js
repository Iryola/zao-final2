import React, { Component } from "react";

export default class Donations extends Component {
  render() {
    return (
      <div className="donations-page-background">
        <div className="donations-page">
          <div className="cover-letters-donations">
            donations & sponsorships
          </div>
          <div className="donations-header">
            We love to support our Zao communities!
          </div>
          <div className="donations-body-1">
            Due to ongoing requests we are committing to a limited amount of
            monthly sponsorships and donations for{" "}
            <span className="donations-org">5013c organizations only.</span>
          </div>
          <div className="donations-small-print">
            Please request at least{" "}
            <span className="fine-print-underline">30 days</span> prior to
            activity.
          </div>
          <div className="donations-body-2">
            Once a monthly sponsorship and donation budget is met for the month
            we can either support your activity the next year or if applicable
            the following month.
          </div>
          <div className="donations-body-1">
            This is on a 1st come 1st serve basis.
          </div>
          <div className="donations-email-body">
            Please email:{" "}
            <a href="mailto:donations@zaoasiancafe.com">
              donations@zaoasiancafe.com
            </a>{" "}
            with your organization, 5013c number, date of activity and what you
            are requesting.
          </div>
          <div className="sponsorships-and-donations">
            <div className="sponsorship">
              <div className="sponsorships">SPONSORSHIPS</div>
              No individual sponsorships. We may donate food for the cash value
              advertising.
            </div>
            <div className="donation">
              <div className="donations">DONATIONS</div>
              We will donate free meal vouchers and other items for auctions
              based on our monthly budget.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
