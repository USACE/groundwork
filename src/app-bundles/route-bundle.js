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
import WaterManagement from "../app-pages/documentation/water-management";
import TabsDocs from "../app-pages/documentation/navigation/tabs";
import TabDocs from "../app-pages/documentation/types/tab";
import BadgeDocs from "../app-pages/documentation/display/badge";
import AccordionDocs from "../app-pages/documentation/display/accordion";
import CardDocs from "../app-pages/documentation/display/card";
import NotFound from "../app-pages/404";
import GenericButtonsDocs from "../app-pages/documentation/buttons/generic-buttons";
import OkCancelDocs from "../app-pages/documentation/buttons/ok-cancel";
import DeleteConfirmDocs from "../app-pages/documentation/buttons/delete-confirm";
import Forms from "../app-pages/documentation/forms";
import InputDocs from "../app-pages/documentation/forms/input";

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
    "/docs/navigation/tabs": TabsDocs,
    "/docs/buttons": ButtonsDocs,
    "/docs/buttons/generic-buttons": GenericButtonsDocs,
    "/docs/buttons/ok-cancel": OkCancelDocs,
    "/docs/buttons/delete-confirm": DeleteConfirmDocs,
    "/docs/display": Display,
    "/docs/display/badge": BadgeDocs,
    "/docs/display/headings": HeadingsDocs,
    "/docs/display/hero": HeroDocs,
    "/docs/display/text": TextDocs,
    "/docs/display/table": TableDocs,
    "/docs/display/card": CardDocs,
    "/docs/display/accordion": AccordionDocs,
    "/docs/forms": Forms,
    "/docs/forms/input": InputDocs,
    "/docs/water-management": WaterManagement,
    "/docs/types": Types,
    "/docs/types/link": LinkDocs,
    "/docs/types/tab": TabDocs,
    "*": NotFound,
  },
  {
    routeInfoSelector: "selectHash",
  }
);
