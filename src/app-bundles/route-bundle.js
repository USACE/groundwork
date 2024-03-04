import { createRouteBundle } from "redux-bundler";
import Home from "../app-pages/home";
import Docs from "../app-pages/docs";
import Navigation from "../app-pages/docs/navigation";
import Breadcrumbs from "../app-pages/docs/navigation/breadcrumbs";
import AppShell from "../app-pages/docs/app-shell";
import Layout from "../app-pages/docs/layout";
import SiteWrapperDocs from "../app-pages/docs/app-shell/site-wrapper";
import Types from "../app-pages/docs/types";
import LinkDocs from "../app-pages/docs/types/link";
import ContainerDocs from "../app-pages/docs/layout/container";
import USACEBoxDocs from "../app-pages/docs/layout/usace-box";

export default createRouteBundle(
  {
    "/": Home,
    "/docs": Docs,
    "/docs/app-shell": AppShell,
    "/docs/app-shell/site-wrapper": SiteWrapperDocs,
    "/docs/layout": Layout,
    "/docs/layout/container": ContainerDocs,
    "/docs/layout/usace-box": USACEBoxDocs,
    "/docs/navigation": Navigation,
    "/docs/navigation/breadcrumbs": Breadcrumbs,
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
