import { SiteWrapper } from "../lib";
import { getNavHelper } from "internal-nav-helper";
import { useConnect } from "redux-bundler-hook";

const links = [{ id: "docs", label: "Documentation", link: "/docs" }];

function App() {
  const {
    route: Route,
    hash,
    doUpdateHash,
  } = useConnect("selectRoute", "selectHash", "doUpdateHash");

  console.log("trying to render");
  if (hash === "") {
    console.log("redirecting to home");
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
        subtitle="Groundwork React Components"
        missionText="We strive to provide the best React components for the USACE."
        aboutText="This is the about text for the footer."
      >
        <Route />
      </SiteWrapper>
    </div>
  );
}

export default App;
