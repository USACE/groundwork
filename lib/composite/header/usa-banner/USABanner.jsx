import { useState } from "react";
import clsx from "clsx";
import "./usa-banner.css";
import flag from "../../../img/us_flag_small.png";
import iconDotGov from "../../../img/icon-dot-gov.svg";
import iconHttps from "../../../img/icon-https.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const USABanner = ({ fluidNav }) => {
  const [open, setOpen] = useState(false);
  const headerBannerInnerClass = clsx(
    "header_banner_inner",
    fluidNav ? "gw-max-w-screen" : "gw-px-4 gw-max-w-screen-2xl"
  );
  return (
    <div
      id="dnn_ctl03_header_banner_container"
      className="header_banner_container"
    >
      <div className={headerBannerInnerClass}>
        <div className="header_banner_flag gw-flex gw-items-center gw-justify-start">
          <img src={flag} className="gw-mr-2" role="presentation" />
          An official website of the United States government
          <div className="header_banner_accordion" tabIndex={0}>
            <u
              onClick={() => {
                setOpen(!open);
              }}
            >
              Here's how you know
              <span
                className={classNames(
                  "expand-more-container",
                  open ? "active" : ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    className="expand-more"
                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                  ></path>
                </svg>
              </span>
            </u>
          </div>
        </div>
        {open ? (
          <div
            className="header_banner_panel active active"
            style={{
              paddingTop: "24px",
              paddingBottom: "18px",
              maxHeight: "328px",
            }}
          >
            <div className="header_banner_panel_item">
              <img
                src={iconDotGov}
                className="gw-h-[50px] gw-w-[50px] gw-mr-4"
              />
              <div
                id="dnn_ctl03_bannerContentLeft"
                className="header_banner_content"
              >
                <p className="banner-contentLeft-text">
                  <strong> Official websites use .mil </strong>
                </p>
                A <strong>.mil</strong> website belongs to an official U.S.
                Department of Defense organization in the United States.
              </div>
            </div>
            <div className="header_banner_panel_item https">
              <img
                src={iconHttps}
                className="gw-h-[50px] gw-w-[50px] gw-mr-4"
              />
              <div
                id="dnn_ctl03_bannerContentRight"
                className="header_banner_content"
              >
                <p className="banner-contentRight-text">
                  <strong>Secure .mil websites use HTTPS</strong>
                </p>
                <div>
                  {" "}
                  A{" "}
                  <strong>
                    lock (
                    <span className="header_banner_icon_lock">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="64"
                        viewBox="0 0 52 64"
                      >
                        <title>lock </title>
                        <path
                          className="icon_lock"
                          fillRule="evenodd"
                          d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                        ></path>{" "}
                      </svg>
                    </span>
                    )
                  </strong>{" "}
                  or <strong> https://</strong> means you’ve safely connected to
                  the .mil website. Share sensitive information only on
                  official, secure websites.
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default USABanner;
export { USABanner };
