import Container from "../../components/layout/container";
import { Text } from "../../components/display/text";
import Essayons from "./essayons";
import LogoBanner from "./logo-banner";
import SocialLinks from "./social-links";
import FooterLinks from "./footer-links";

const defaultLinks = [
  {
    href: "https://www.lrd.usace.army.mil/about/connect-with-us/",
    text: "Contact",
  },
  {
    href: "https://www.lrd.usace.army.mil/Careers/",
    text: "Join Our Team",
  },
  {
    href: "https://www.lrd.usace.army.mil/Wetlands-Permits/",
    text: "Request a Permit (Regulatory)",
  },
  {
    href: "https://www.lrd.usace.army.mil/FOIA/",
    text: "Records Request (FOIA)",
  },
  {
    href: "https://www.usace.army.mil/About/Offices-and-Units/Engineer-Inspector-General/",
    text: "File a Complaint (IG)",
  },
  {
    href: "https://www.lrd.usace.army.mil/Business-With-Us/",
    text: "Business With Us",
  },
  {
    href: "https://www.lrd.usace.army.mil/Equal-Employment-Opportunity/",
    text: "Equal Employment Opportunity (EEO)",
  },
  {
    href: "https://www.usace.army.mil/LinkDisclaimer.aspx",
    text: "Link Disclaimer",
  },
  {
    href: "https://www.usace.army.mil/PrivacyandSecurity.aspx",
    text: "Privacy and Security",
  },
  {
    href: "https://www.lrd.usace.army.mil/SiteMap.aspx",
    text: "Site Map",
  },
];

const defaultOffsiteLinks = [
  {
    href: "https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx",
    text: "Accessibility (Section 508)",
  },
  {
    href: "http://www.esd.whs.mil/DD/plainlanguage",
    text: "Plain Writing Act",
  },
  {
    href: "https://prhome.defense.gov/nofear",
    text: "No FEAR Act",
  },
  {
    href: "https://open.defense.gov/",
    text: "Open Government",
  },
  {
    href: "https://business.defense.gov/",
    text: "Small Business Act",
  },
  {
    href: "https://www.inscom.army.mil/isalute/",
    text: "Report Suspicious Activity",
  },
  {
    href: "https://www.usa.gov",
    text: "Find Government Services (USA.gov)",
  },
];

function Footer({
  fluidNav,
  missionText,
  aboutText,
  facebookUrl,
  twitterUrl,
  youtubeUrl,
  flickrUrl,
  instagramUrl,
  linkedInUrl,
  usaceLinks,
  externalLinks,
  armyLogo,
  army250Logo,
  usaceLogo,
  usace250Logo,
  rsgisLogo,
  cwbiLogo,
}) {
  return (
    <footer className="gw-relative gw-text-footer-light-gray gw-text-sm gw-bg-footer-black gw-border-t-gray-600 gw-border-t-4 gw-pb-[128px]">
      <Essayons />
      <div className="gw-bg-footer-gray gw-pt-8 gw-pb-16">
        <Container fluid={fluidNav}>
          <div className="gw-grid gw-grid-cols-12 gw-gap-2 lg:gw-gap-10">
            <div className="gw-col-span-12 lg:gw-col-span-6">
              <div className="gw-grid gw-grid-cols-12 gw-gap-2">
                <div className="gw-col-span-12 lg:gw-col-span-12">
                  {missionText && (
                    <>
                      <h2 className="gw-text-lg">Our Mission</h2>
                      <Text>{missionText}</Text>
                    </>
                  )}
                </div>
                <div className="gw-col-span-12 gw-mt-4">
                  {aboutText && (
                    <>
                      <h2 className="gw-text-lg">About this Website</h2>
                      <Text>{aboutText}</Text>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="gw-col-span-12 gw-mt-8 lg:gw-mt-2 md:gw-col-span-4">
              <SocialLinks
                facebook={facebookUrl}
                twitter={twitterUrl}
                youtube={youtubeUrl}
                flickr={flickrUrl}
                instagram={instagramUrl}
                linkedIn={linkedInUrl}
              />
              <FooterLinks links={usaceLinks} />
            </div>
            <div className="gw-col-span-8 md:gw-mt-20 lg:gw-mt-14  md:gw-col-span-2">
              <FooterLinks links={externalLinks} columnCount={1} />
            </div>
          </div>
        </Container>
        <LogoBanner
          army={armyLogo}
          army250={army250Logo}
          usace={usaceLogo}
          usace250={usace250Logo}
          rsgis={rsgisLogo}
          cwbi={cwbiLogo}
        />
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
