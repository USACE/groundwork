import {
  SiteWrapper,
  SearchDotGov,
  LoginButton,
  ProfileDropdown,
} from "../lib";
import { getNavHelper } from "internal-nav-helper";
import { useConnect } from "redux-bundler-hook";
import links from "./nav-links";

const version = import.meta.env.PKG_VERSION;

function App() {
  const {
    route: Route,
    hash,
    doUpdateHash,
  } = useConnect("selectRoute", "selectHash", "doUpdateHash");

  if (hash === "") {
    window.setTimeout(() => {
      doUpdateHash("/");
    }, 100);
    return null;
  }

  return (
    <div onClick={getNavHelper((url) => doUpdateHash(url))}>
      <SiteWrapper
        links={links}
        usaBanner={true}
        subtitle={`Groundwork React Components v${version}`}
        missionText="We strive to provide the best React components for the USACE."
        aboutText="This is the about text for the footer."
        navRight={
          <>
            <SearchDotGov
              affiliate="groundwork"
              accessKey="JdBfW2_sGkdcLr4BTzCoOQIRy3oRP7kmzJ2DwIs-SCM="
            />
            <LoginButton />
            <ProfileDropdown
              username="willbreitkreutz"
              email="will.l.breitkreutz@gmail.com"
              links={[
                { id: "profile", text: "Profile", href: "/profile" },
                { id: "logout", text: "Logout", href: "/logout" },
              ]}
            />
          </>
        }
      >
        <Route />
      </SiteWrapper>
    </div>
  );
}

export default App;
