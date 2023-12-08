import { ThemeProvider } from "../lib/components/theme/ThemeProvider";
import { PageHeader } from "../lib/components/composite/header/PageHeader";
import useRouter, { doUpdateUrl } from "./router/useRouter";
import { getNavHelper } from "internal-nav-helper";

function App() {
  const [Route, routeParams] = useRouter();
  return (
    <div onClick={getNavHelper(doUpdateUrl)}>
      <ThemeProvider>
        <PageHeader
          title="U.S. Army Corps of Engineers"
          subtitle="Groundwork React Components"
        />
        <Route routeParams={routeParams} />
      </ThemeProvider>
    </div>
  );
}

export default App;
