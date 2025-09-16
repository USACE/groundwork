import { useState } from "react";
import gwMerge from "../../../gw-merge";
import "./usa-banner.css";
import flag from "../../../img/us_flag_small.png";
import iconDotGov from "../../../img/icon-dot-gov.svg";
import iconHttps from "../../../img/icon-https.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const USABanner = ({ fluidNav }) => {
  const [open, setOpen] = useState(false);
  const headerBannerInnerClass = gwMerge(
    "header_banner_inner sm:gw-my-0 sm:gw-mx-auto sm:gw-font-sm",
    fluidNav ? "gw-max-w-screen" : "gw-px-4 gw-max-w-screen-2xl",
  );
  return (
    <div className="header_banner_container gw-bg-gov-banner-black gw-text-white">
      <div className={headerBannerInnerClass}>
        <div className="header_banner_flag gw-fill-gov-banner-gray gw-py-1.5 gw-h-12 sm:gw-h-8 gw-px-0 gw-text-sm gw-box-border gw-flex gw-items-center gw-justify-start">
          <img
            src={flag}
            className="gw-mr-2"
            role="presentation"
            aria-label="U.S. Government Flag"
            alt="U.S. Government Flag"
          />
          An official website of the United States government
          <div
            className="header_banner_accordion gw-text-gov-banner-gray gw-border-0 gw-cursor-pointer gw-text-sm gw-outline-none gw-text-left gw-transition-all gw-duration-300 gw-ease-out gw-my-0 gw-ms-1 gw-me-2.5 sm:gw-me-0 gw-inline-block focus:outline-5 focus:outline-focus-ring"
            tabIndex={0}
          >
            <u
              onClick={() => {
                setOpen(!open);
              }}
            >
              Here's how you know
              <span
                className={classNames(
                  "expand-more-container gw-inline-block gw-align-top",
                  open ? "gw-transform gw-rotate-180" : "",
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  className="gw-inline-block gw-relative gw-transition-all gw-delay-300 gw-ease-out gw-align-middle gw-h-[18px] gw-w-[18px]"
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
          <div className="header_banner_panel gw-flex gw-flex-col md:gw-flex-row gw-my-0 gw-mx-auto gw-overflow-hidden gw-pt-6 gw-pb-4 gw-max-h-[328px] active">
            <div className="header_banner_panel_item">
              <img
                src={iconDotGov}
                alt="Generic government building icon"
                aria-label="Generic government building icon"
                className="gw-h-[50px] gw-w-[50px] gw-mr-4"
              />
              <div
                id="dnn_ctl03_bannerContentLeft"
                className="header_banner_content gw-text-sm gw-leading-7 gw-w-full gw-mb-2.5 -gw-tracking-tighter"
              >
                <p className="banner-contentLeft-text mb-0 gw-text-lg gw-text-white">
                  <strong> Official websites use .mil </strong>
                </p>
                A <strong>.mil</strong> website belongs to an official U.S.
                Department of Defense organization in the United States.
              </div>
            </div>
            <div className="header_banner_panel_item https">
              <img
                src={iconHttps}
                alt="HTTPS secure lock icon"
                aria-label="HTTPS secure lock icon"
                className="gw-h-[50px] gw-w-[50px] gw-mr-4"
              />
              <div
                id="dnn_ctl03_bannerContentRight"
                className="header_banner_content gw-text-sm gw-leading-7 gw-w-full gw-mb-2.5 -gw-tracking-tighter"
              >
                <p className="banner-contentRight-text mb-0 gw-text-lg gw-text-white">
                  <strong>Secure .mil websites use HTTPS</strong>
                </p>
                <div>
                  {" "}
                  A{" "}
                  <strong>
                    lock (
                    <span className="header_banner_icon_lock gw-inline-block gw-h-[15px] gw-w-[15px] gw-my-0 gw-mx-2 gw-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="64"
                        viewBox="0 0 52 64"
                        className="gw-fill-black gw-h-[15px] gw-w-[15px]"
                      >
                        <title>lock </title>
                        <path
                          className="icon_lock gw-fill-white"
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
