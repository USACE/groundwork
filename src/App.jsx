import { SiteWrapper, SearchDotGov } from "../lib";
import { getNavHelper } from "internal-nav-helper";
import { useConnect } from "redux-bundler-hook";

const version = import.meta.env.PKG_VERSION;

const links = [{ id: "docs", label: "Documentation", link: "/docs" }];

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
        headerLinks={links}
        usaBanner={true}
        subtitle={`Groundwork React Components v${version}`}
        missionText="We strive to provide the best React components for the USACE."
        aboutText="This is the about text for the footer."
        search={
          <SearchDotGov
            affiliate="groundwork"
            accessKey="JdBfW2_sGkdcLr4BTzCoOQIRy3oRP7kmzJ2DwIs-SCM="
          />
        }
      >
        <Route />
      </SiteWrapper>
    </div>
  );
}

export default App;
