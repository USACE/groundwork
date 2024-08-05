import armyLogo from "../../img/armystar-logo-rb.svg";
import usaceLogo from "../../img/usace-logo-color.svg";
import rsgisLogo from "../../img/rsgis-logo.png";
import cwbiLogo from "../../img/cwbi-logo.png";

function LogoBanner({ army, usace, rsgis, cwbi }) {
  return (
    <div className="gw-flex gw-flex-row gw-justify-center gw-align-middle gw-gap-6 gw-mb-4 gw-mt-4">
      {army && (
        <a href="https://www.army.mil" target="_blank" rel="noopener">
          <img src={armyLogo} aria-label="U.S. Army Logo" alt="U.S. Army" className="gw-max-h-[75px]" />
        </a>
      )}
      {usace && (
        <a href="https://www.usace.army.mil" target="_blank" rel="noopener">
          <img
            src={usaceLogo}
            aria-label="U.S. Army Corps of Engineers"
            alt="U.S. Army Corps of Engineers"
            className="gw-max-h-[75px] gw-h-[75px] gw-w-auto"
          />
        </a>
      )}
      {rsgis && (
        <a
          href="https://www.erdc.usace.army.mil/Media/Fact-Sheets/Fact-Sheet-Article-View/article/476649/remote-sensinggeographic-information-systems-center/"
          target="_blank"
          rel="noopener"
        >
          <img
            src={rsgisLogo}
            aria-label="Remote Sensing - GIS Center of Expertise Logo"
            alt="Remote Sensing - GIS Center of Expertise"
            className="gw-max-h-[75px]"
          />
        </a>
      )}
      {cwbi && (
        <a
          href="https://cwbi.sec.usace.army.mil"
          target="_blank"
          rel="noopener"
        >
          <img
            src={cwbiLogo}
            aria-label="Civil Works Business Intelligence Logo"
            alt="Civil Works Business Intelligence"
            className="gw-max-h-[75px]"
          />
        </a>
      )}
    </div>
  );
}

export default LogoBanner;
export { LogoBanner };
