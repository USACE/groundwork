const base = import.meta.env.BASE_URL;

function LogoBanner({ army, usace, rsgis, cwbi }) {
  return (
    <div className="flex flex-row justify-center align-middle gap-6 mb-4">
      {army && (
        <a href="https://www.army.mil" target="_blank" rel="noopener">
          <img
            src={`${base}armystar-logo-rb.svg`}
            alt="U.S. Army"
            className="max-h-[75px]"
          />
        </a>
      )}
      {usace && (
        <a href="https://www.usace.army.mil" target="_blank" rel="noopener">
          <img
            src={`${base}usace-logo-color.svg`}
            alt="U.S. Army Corps of Engineers"
            className="max-h-[75px] h-[75px] w-auto"
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
            src={`${base}rsgis-logo.png`}
            alt="Remote Sensing - GIS Center of Expertise"
            className="max-h-[75px]"
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
            src={`${base}cwbi-logo.png`}
            alt="Civil Works Business Intelligence"
            className="max-h-[75px]"
          />
        </a>
      )}
    </div>
  );
}

export default LogoBanner;
export { LogoBanner };
