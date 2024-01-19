import featherRouteMatcher from "feather-route-matcher";
import Home from "../pages/home/Home";
import Docs from "../pages/docs/Docs";
import NotFound from "../pages/404/NotFound";

export default featherRouteMatcher({
  "": Home,
  "/": Home,
  "/docs": Docs,
  "/docs/:page": Docs,
  "*": NotFound,
});
