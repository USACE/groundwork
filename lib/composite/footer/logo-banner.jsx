const base = import.meta.env.BASE_URL;
import armyLogo from "../../img/armystar-logo-rb.svg";
import usaceLogo from "../../img/usace-logo-color.svg";
import rsgisLogo from "../../img/rsgis-logo.png";
import cwbiLogo from "../../img/cwbi-logo.png";

function LogoBanner({ army, usace, rsgis, cwbi }) {
  return (
    <div className="gw-flex gw-flex-row gw-justify-center gw-align-middle gw-gap-6 gw-mb-4">
      {army && (
        <a href="https://www.army.mil" target="_blank" rel="noopener">
          <img src={armyLogo} alt="U.S. Army" className="gw-max-h-[75px]" />
        </a>
      )}
      {usace && (
        <a href="https://www.usace.army.mil" target="_blank" rel="noopener">
          <img
            src={usaceLogo}
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
