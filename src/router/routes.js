import featherRouteMatcher from "feather-route-matcher";
import Home from "../pages/home/Home";
import Docs from "../pages/docs/Docs";
import NotFound from "../pages/404/NotFound";
// import Buttons from "../pages/buttons";
// import Typography from "../pages/typography";
// import Display from "../pages/display";

export default featherRouteMatcher({
  "": Home,
  "/": Home,
  "/docs": Docs,
  "/docs/:page": Docs,
  // "/buttons": Buttons,
  // "/typography": Typography,
  // "/display": Display,
  "*": NotFound,
});
