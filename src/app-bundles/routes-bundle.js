import { createRouteBundle } from "redux-bundler";
import Home from "../app-pages/home";
import Docs from "../app-pages/documentation";
// Navigation
import Navigation from "../app-pages/documentation/navigation";
import Breadcrumbs from "../app-pages/documentation/navigation/breadcrumbs";
import TabsDocs from "../app-pages/documentation/navigation/tabs";
import Sidebar from "../app-pages/documentation/navigation/sidebar";
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
import SkeletonDocs from "../app-pages/documentation/display/skeleton";
import TextDocs from "../app-pages/documentation/display/text";
import TableDocs from "../app-pages/documentation/display/table";
import HeroDocs from "../app-pages/documentation/display/hero";
import TabDocs from "../app-pages/documentation/types/tab";
import BadgeDocs from "../app-pages/documentation/display/badge";
import AccordionDocs from "../app-pages/documentation/display/accordion";
import CardDocs from "../app-pages/documentation/display/card";
import ProgressDocs from "../app-pages/documentation/display/progress-bar";
import NotFound from "../app-pages/404";
import GenericButtonsDocs from "../app-pages/documentation/buttons/generic-buttons";
import OkCancelDocs from "../app-pages/documentation/buttons/ok-cancel";
import DeleteConfirmDocs from "../app-pages/documentation/buttons/delete-confirm";
import PopoutMenuDocs from "../app-pages/documentation/buttons/popout-menu";
import Forms from "../app-pages/documentation/forms";
import TextInputDocs from "../app-pages/documentation/forms/text-input";
import NumericInputDocs from "../app-pages/documentation/forms/numeric-inputs";
import ColorInputDocs from "../app-pages/documentation/forms/color-input";
import DateTimeInputDocs from "../app-pages/documentation/forms/date-time-inputs";
import DropdownDocs from "../app-pages/documentation/forms/dropdown";
import FileInputDocs from "../app-pages/documentation/forms/file-input";
import FieldsetDocs from "../app-pages/documentation/forms/fieldset";
import TextareaDocs from "../app-pages/documentation/forms/textarea";
import Logout from "../app-pages/logout";
import LoginButtonDocs from "../app-pages/documentation/buttons/login-button";
import QuickStartGuide from "../app-pages/documentation/getting-started/quick-start-guide";
import AddingTailwind from "../app-pages/documentation/getting-started/adding-tailwind";
import ClientSideRouting from "../app-pages/documentation/getting-started/client-side-routing";
import PackageMaintenance from "../app-pages/documentation/getting-started/package-maintenance";
import LinkProviderDocs from "../app-pages/documentation/navigation/link-provider";
import DividerDocs from "../app-pages/documentation/display/divider";
import ModalDocs from "../app-pages/documentation/display/modal";
import RadioGroupDocs from "../app-pages/documentation/forms/radio-group";
import CheckboxesDocs from "../app-pages/documentation/forms/checkboxes";


export default createRouteBundle(
  {
    "/": Home,
    "/docs": Docs,
    "/docs/quick-start": QuickStartGuide,
    "/docs/adding-tailwind": AddingTailwind,
    "/docs/client-side-routing": ClientSideRouting,
    "/docs/package-maintenance": PackageMaintenance,
    "/docs/app-shell": AppShell,
    "/docs/app-shell/site-wrapper": SiteWrapperDocs,
    "/docs/app-shell/search": SearchDocs,
    "/docs/layout": Layout,
    "/docs/layout/container": ContainerDocs,
    "/docs/layout/usace-box": USACEBoxDocs,
    "/docs/navigation": Navigation,
    "/docs/navigation/breadcrumbs": Breadcrumbs,
    "/docs/navigation/link-provider": LinkProviderDocs,
    "/docs/navigation/tabs": TabsDocs,
    "/docs/navigation/sidebar": Sidebar,
    "/docs/buttons": ButtonsDocs,
    "/docs/buttons/generic-buttons": GenericButtonsDocs,
    "/docs/buttons/ok-cancel": OkCancelDocs,
    "/docs/buttons/delete-confirm": DeleteConfirmDocs,
    "/docs/buttons/login-button": LoginButtonDocs,
    "/docs/buttons/popout-menu": PopoutMenuDocs,
    "/docs/display": Display,
    "/docs/display/badge": BadgeDocs,
    "/docs/display/divider": DividerDocs,
    "/docs/display/headings": HeadingsDocs,
    "/docs/display/hero": HeroDocs,
    "/docs/display/skeleton": SkeletonDocs,
    "/docs/display/text": TextDocs,
    "/docs/display/table": TableDocs,
    "/docs/display/card": CardDocs,
    "/docs/display/accordion": AccordionDocs,
    "/docs/display/modal": ModalDocs,
    "/docs/display/progress-bar": ProgressDocs,
    "/docs/forms": Forms,
    "/docs/forms/dropdown": DropdownDocs,
    "/docs/forms/fieldset": FieldsetDocs,
    "/docs/forms/text-inputs": TextInputDocs,
    "/docs/forms/textarea": TextareaDocs,
    "/docs/forms/numeric-inputs": NumericInputDocs,
    "/docs/forms/color-input": ColorInputDocs,
    "/docs/forms/date-time-inputs": DateTimeInputDocs,
    "/docs/forms/file-input": FileInputDocs,
    "/docs/forms/radio-group": RadioGroupDocs,
    "/docs/forms/checkboxes": CheckboxesDocs,
    "/docs/types": Types,
    "/docs/types/link": LinkDocs,
    "/docs/types/tab": TabDocs,
    "/logout": Logout,
    "*": NotFound,
  },
  {
    routeInfoSelector: "selectHash",
  }
);
