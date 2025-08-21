const BASE_URL = import.meta.env.BASE_URL;

export default [
  {
    id: "getting-started",
    text: "Getting Started",
    href: `${BASE_URL}#/docs`,
    children: [
      {
        id: "quick-start",
        text: "Quick Start Guide",
        href: `${BASE_URL}#/docs/quick-start`,
      },
      {
        id: "adding-tailwind",
        text: "Adding Tailwind CSS",
        href: `${BASE_URL}#/docs/adding-tailwind`,
      },
      {
        id: "client-side-routing",
        text: "Client-Side Routing",
        href: `${BASE_URL}#/docs/client-side-routing`,
      },
      {
        id: "package-maintenance",
        text: "Package Maintenance",
        href: `${BASE_URL}#/docs/package-maintenance`,
      },
    ],
  },
  {
    id: "app-shell",
    text: "Application Shell",
    href: `${BASE_URL}#/docs/app-shell`,
    children: [
      {
        id: "site-wrapper",
        text: "Site Wrapper",
        href: `${BASE_URL}#/docs/app-shell/site-wrapper`,
      },
      {
        id: "search",
        text: "Search",
        href: `${BASE_URL}#/docs/app-shell/search`,
      },
    ],
  },
  {
    id: "layout",
    text: "Layout",
    href: `${BASE_URL}#/docs/layout`,
    children: [
      {
        id: "container",
        text: "Container",
        href: `${BASE_URL}#/docs/layout/container`,
      },
      {
        id: "usace-box",
        text: "UsaceBox",
        href: `${BASE_URL}#/docs/layout/usace-box`,
      },
    ],
  },
  {
    id: "navigation",
    text: "Navigation",
    href: `${BASE_URL}#/docs/navigation`,
    children: [
      {
        id: "breadcrumbs",
        text: "Breadcrumbs",
        href: `${BASE_URL}#/docs/navigation/breadcrumbs`,
      },
      {
        id: "link-provider",
        text: "Link Provider",
        href: `${BASE_URL}#/docs/navigation/link-provider`,
      },
      {
        id: "tabs",
        text: "Tabs",
        href: `${BASE_URL}#/docs/navigation/tabs`,
      },
      {
        id: "sidebar",
        text: "Sidebar",
        href: `${BASE_URL}#/docs/navigation/sidebar`,
      },
    ],
  },
  {
    id: "buttons",
    text: "Buttons",
    href: `${BASE_URL}#/docs/buttons`,
    children: [
      {
        id: "generic-buttons",
        text: "Generic Buttons",
        href: `${BASE_URL}#/docs/buttons/generic-buttons`,
      },
      {
        id: "ok-cancel",
        text: "Ok/Cancel",
        href: `${BASE_URL}#/docs/buttons/ok-cancel`,
      },
      {
        id: "delete-confirm",
        text: "Delete/Confirm",
        href: `${BASE_URL}#/docs/buttons/delete-confirm`,
      },
      {
        id: "login-button",
        text: "Login Button",
        href: `${BASE_URL}#/docs/buttons/login-button`,
      },
      {
        id: "popout-menu",
        text: "Popout Menu",
        href: `${BASE_URL}#/docs/buttons/popout-menu`,
      },
    ],
  },
  {
    id: "display",
    text: "Display",
    href: `${BASE_URL}#/docs/display`,
    children: [
      {
        id: "badge",
        text: "Badge",
        href: `${BASE_URL}#/docs/display/badge`,
      },
      {
        id: "divider",
        text: "Divider",
        href: `${BASE_URL}#/docs/display/divider`,
      },
      {
        id: "headings",
        text: "Headings",
        href: `${BASE_URL}#/docs/display/headings`,
      },
      {
        id: "hero",
        text: "Hero",
        href: `${BASE_URL}#/docs/display/hero`,
      },
      {
        id: "skeleton",
        text: "Skeleton",
        href: `${BASE_URL}#/docs/display/skeleton`,
      },
      {
        id: "text",
        text: "Text",
        href: `${BASE_URL}#/docs/display/text`,
      },
      {
        id: "table",
        text: "Table",
        href: `${BASE_URL}#/docs/display/table`,
      },
      {
        id: "modal",
        text: "Modal",
        href: `${BASE_URL}#/docs/display/modal`,
      },
      {
        id: "accordion",
        text: "Accordion",
        href: `${BASE_URL}#/docs/display/accordion`,
      },
      {
        id: "card",
        text: "Card",
        href: `${BASE_URL}#/docs/display/card`,
      },
      {
        id: "progress-bar",
        text: "Progress Bar",
        href: `${BASE_URL}#/docs/display/progress-bar`,
      },
    ],
  },
  {
    id: "forms",
    text: "Forms",
    href: `${BASE_URL}#/docs/forms`,
    children: [
      {
        id: "checkboxes",
        text: "Checkboxes",
        href: `${BASE_URL}#/docs/forms/checkboxes`,
      },
      {
        id: "forms-dropdown",
        text: "Dropdown",
        href: `${BASE_URL}#/docs/forms/dropdown`,
      },
      {
        id: "fieldset",
        text: "Fieldset",
        href: `${BASE_URL}#/docs/forms/fieldset`,
      },
      {
        id: "text-inputs",
        text: "Text Inputs",
        href: `${BASE_URL}#/docs/forms/text-inputs`,
      },
      {
        id: "textarea",
        text: "Text Area",
        href: `${BASE_URL}#/docs/forms/textarea`,
      },
      {
        id: "numeric-inputs",
        text: "Numeric Inputs",
        href: `${BASE_URL}#/docs/forms/numeric-inputs`,
      },
      {
        id: "color-input",
        text: "Color Input",
        href: `${BASE_URL}#/docs/forms/color-input`,
      },
      {
        id: "date-time-inputs",
        text: "Date/Time Inputs",
        href: `${BASE_URL}#/docs/forms/date-time-inputs`,
      },
      {
        id: "file-input",
        text: "File Input",
        href: `${BASE_URL}#/docs/forms/file-input`,
      },
      {
        id: "radio-group",
        text: "Radio Group",
        href: `${BASE_URL}#/docs/forms/radio-group`,
      },
    ],
  },
  {
    id: "types",
    text: "Types",
    href: `${BASE_URL}#/docs/types`,
    children: [
      {
        id: "link",
        text: "Link",
        href: `${BASE_URL}#/docs/types/link`,
      },
      {
        id: "tab",
        text: "Tab",
        href: `${BASE_URL}#/docs/types/tab`,
      },
    ],
  },
];
