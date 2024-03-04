import USABanner from "../header/usa-banner/USABanner";
import Header from "../header";
import Footer from "../footer";

function SiteWrapper({
  children,
  headerLinks,
  usaBanner = true,
  msgBanner: MsgBanner = false,
  title = "US Army Corps of Engineers",
  subtitle = "",
  missionText = "",
  aboutText = "",
  facebookUrl = "",
  twitterUrl = "",
  youtubeUrl = "",
  flickrUrl = "",
  usaceLinks = [],
  externalLinks = [],
  armyLogo = true,
  usaceLogo = true,
  rsgisLogo = false,
  cwbiLogo = false,
}) {
  return (
    <div className="grid min-h-[100vh] grid-rows-1fr-auto">
      <div>
        {usaBanner && <USABanner />}
        {MsgBanner && <MsgBanner />}
        <Header links={headerLinks} title={title} subtitle={subtitle} />
        {children}
      </div>
      <Footer
        missionText={missionText}
        aboutText={aboutText}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        youtubeUrl={youtubeUrl}
        flickrUrl={flickrUrl}
        usaceLinks={usaceLinks}
        externalLinks={externalLinks}
        armyLogo={armyLogo}
        usaceLogo={usaceLogo}
        rsgisLogo={rsgisLogo}
        cwbiLogo={cwbiLogo}
      />
    </div>
  );
}

export default SiteWrapper;
export { SiteWrapper };
