import { useEffect, useState } from "react";
import routes from "./routes";
window.routes = routes;

const homepage = import.meta.env.VITE_HOMEPAGE;
const defaultPath = window.location.href.replace(homepage, "");

function useRouter() {
  const [route, setRoute] = useState(routes(defaultPath));

  useEffect(() => {
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  function handleRouteChange() {
    const href = window.location.href;
    const path = href.replace(homepage, "");
    const newRoute = routes(path);
    setRoute(newRoute);
  }

  return [route.value, route.params];
}

function doUpdateUrl(path) {
  const href = window.location.href;
  const url = new URL(href);
  url.pathname = path;
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default useRouter;
export { doUpdateUrl, useRouter };
