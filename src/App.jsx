import { SiteWrapper, SearchDotGov, Button } from "../lib";
import { getNavHelper } from "internal-nav-helper";
import { useConnect } from "redux-bundler-hook";
import links from "./nav-links";
import { FaGithub } from "react-icons/fa";

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
        fluidNav={true}
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
            <Button
              style="plain"
              color="white"
              size="lg"
              href="https://github.com/usace/groundwork"
              title="Check out the source code on GitHub"
            >
              <FaGithub />
            </Button>
          </>
        }
      >
        <Route />
      </SiteWrapper>
    </div>
  );
}

export default App;
