import USABanner from "../header/usa-banner/USABanner";
import Header from "../header";
import Footer from "../footer";
import DoDWarning from "./dod-warning";

function SiteWrapper({
  children,
  navRight = undefined,
  showFooter = true,
  links,
  usaBanner = true,
  msgBanner = undefined,
  msgBannerPosition = "top",
  title = "US Army Corps of Engineers",
  fluidNav = false,
  subtitle = "",
  missionText = "",
  aboutText = "",
  facebookUrl = "",
  twitterUrl = "",
  youtubeUrl = "",
  flickrUrl = "",
  instagramUrl = "",
  usaceLinks = [],
  externalLinks = [],
  armyLogo = true,
  usaceLogo = true,
  rsgisLogo = false,
  cwbiLogo = false,
  showWarning = false,
  warningTimeout = undefined,
}) {
  return (
    <div className="gw-grid gw-min-h-[100vh] gw-grid-rows-1fr-auto">
      <div>
        {usaBanner && <USABanner fluidNav={fluidNav} />}
        {msgBanner && msgBannerPosition === "top" ? msgBanner : null}
        <Header
          links={links}
          title={title}
          subtitle={subtitle}
          navRight={navRight}
          fluidNav={fluidNav}
        />

        {msgBanner && msgBannerPosition === "bottom" ? msgBanner : null}
        {children}
      </div>
      {showFooter && (
        <Footer
          fluidNav={fluidNav}
          missionText={missionText}
          aboutText={aboutText}
          facebookUrl={facebookUrl}
          twitterUrl={twitterUrl}
          youtubeUrl={youtubeUrl}
          flickrUrl={flickrUrl}
          instagramUrl={instagramUrl}
          usaceLinks={usaceLinks}
          externalLinks={externalLinks}
          armyLogo={armyLogo}
          usaceLogo={usaceLogo}
          rsgisLogo={rsgisLogo}
          cwbiLogo={cwbiLogo}
        />
      )}
      {showWarning && <DoDWarning warningTimeout={warningTimeout} />}
    </div>
  );
}

export default SiteWrapper;
export { SiteWrapper };
