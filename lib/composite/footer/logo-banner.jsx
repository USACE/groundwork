import { useEffect, useState } from "react";

const logoLoaders = {
  army: () => import("../../img/armystar-logo-rb.svg"),
  army250: () => import("../../img/Army-250-year-logo.png"),
  usace: () => import("../../img/usace-logo-color.svg"),
  usace250: () => import("../../img/USACE-250-year-logo.png"),
  rsgis: () => import("../../img/rsgis-logo.png"),
  cwbi: () => import("../../img/cwbi-logo.png"),
};

function LazyLogo({ loader, ...props }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;

    loader().then((module) => {
      if (!cancelled) {
        setSrc(module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [loader]);

  if (!src) {
    return null;
  }

  return <img src={src} {...props} />;
}

function LogoBanner({ army, army250, usace, usace250, rsgis, cwbi }) {
  return (
    <div className="gw-flex gw-flex-row gw-justify-center gw-align-middle gw-gap-6 gw-mb-4 gw-mt-4">
      {army && (
        <a href="https://www.army.mil" target="_blank" rel="noopener">
          <LazyLogo
            loader={logoLoaders.army}
            aria-label="U.S. Army Logo"
            alt="U.S. Army"
            className="gw-max-h-[75px]"
          />
        </a>
      )}
      {army250 && (
        <a href="https://www.army.mil" target="_blank" rel="noopener">
          <LazyLogo
            loader={logoLoaders.army250}
            aria-label="U.S. Army 250 Year Anniversary Logo"
            alt="U.S. Army"
            className="gw-max-h-[75px]"
          />
        </a>
      )}
      {usace && (
        <a href="https://www.usace.army.mil" target="_blank" rel="noopener">
          <LazyLogo
            loader={logoLoaders.usace}
            aria-label="U.S. Army Corps of Engineers"
            alt="U.S. Army Corps of Engineers"
            className="gw-max-h-[75px] gw-h-[75px] gw-w-auto"
          />
        </a>
      )}
      {usace250 && (
        <a href="https://www.usace.army.mil" target="_blank" rel="noopener">
          <LazyLogo
            loader={logoLoaders.usace250}
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
          <LazyLogo
            loader={logoLoaders.rsgis}
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
          <LazyLogo
            loader={logoLoaders.cwbi}
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
