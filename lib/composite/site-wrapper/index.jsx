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
  linkedInUrl = "",
  usaceLinks = [],
  externalLinks = [],
  armyLogo = true,
  army250Logo = false,
  usaceLogo = true,
  usace250Logo = false,
  rsgisLogo = false,
  cwbiLogo = false,
  showWarning = false,
  warningTimeout = undefined,
}) {
  // Warn developer that msgBannerPosition should either be top or bottom, but nothing else.
  if (!["top", "bottom"].includes(msgBannerPosition)) {
    console.warn(
      "You must specify top or bottom for messageBannerPosition. Ignoring parameter",
    );
  }

  return (
    <div className="gw:grid gw:min-h-screen gw:grid-rows-1fr-auto">
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
          linkedInUrl={linkedInUrl}
          usaceLinks={usaceLinks}
          externalLinks={externalLinks}
          armyLogo={armyLogo}
          army250Logo={army250Logo}
          usaceLogo={usaceLogo}
          usace250Logo={usace250Logo}
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
