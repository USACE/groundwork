import { createRouteBundle } from "redux-bundler";
import Home from "../app-pages/home";
import Docs from "../app-pages/documentation";
import Navigation from "../app-pages/documentation/navigation";
import Breadcrumbs from "../app-pages/documentation/navigation/breadcrumbs";
import AppShell from "../app-pages/documentation/app-shell";
import Layout from "../app-pages/documentation/layout";
import SiteWrapperDocs from "../app-pages/documentation/app-shell/site-wrapper";
import Types from "../app-pages/documentation/types";
import LinkDocs from "../app-pages/documentation/types/link";
import ContainerDocs from "../app-pages/documentation/layout/container";
import USACEBoxDocs from "../app-pages/documentation/layout/usace-box";
import ButtonsDocs from "../app-pages/documentation/buttons";
import SearchDocs from "../app-pages/documentation/app-shell/search";
import Display from "../app-pages/documentation/display";
import HeadingsDocs from "../app-pages/documentation/display/headings";
import TextDocs from "../app-pages/documentation/display/text";
import TableDocs from "../app-pages/documentation/display/table";
import HeroDocs from "../app-pages/documentation/display/hero";

export default createRouteBundle(
  {
    "/": Home,
    "/docs": Docs,
    "/docs/app-shell": AppShell,
    "/docs/app-shell/site-wrapper": SiteWrapperDocs,
    "/docs/app-shell/search": SearchDocs,
    "/docs/layout": Layout,
    "/docs/layout/container": ContainerDocs,
    "/docs/layout/usace-box": USACEBoxDocs,
    "/docs/navigation": Navigation,
    "/docs/navigation/breadcrumbs": Breadcrumbs,
    "/docs/buttons": ButtonsDocs,
    "/docs/display": Display,
    "/docs/display/headings": HeadingsDocs,
    "/docs/display/hero": HeroDocs,
    "/docs/display/text": TextDocs,
    "/docs/display/table": TableDocs,
    "/docs/types": Types,
    "/docs/types/link": LinkDocs,
    "/about": "about",
    "/contact": "contact",
    "/404": () => "notFound",
  },
  {
    routeInfoSelector: "selectHash",
  }
);
