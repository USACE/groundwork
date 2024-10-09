export default [
  {
    id: "l1",
    text: "Link 1",
    href: "#link1",
  },
  {
    id: "l2",
    text: "Link 2",
    href: "#link2",
    children: [
      {
        id: "l3",
        text: "Child Link 3",
        href: "#childlink3",
        children: [
          {
            id: "l4",
            text: "Child Link 4",
            href: "#childlink4",
          },
          {
            id: "l5",
            text: "Child Link 5",
            href: "#childlink5",
          },
        ],
      },
    ],
  },
  {
    id: "l6",
    text: "Link 6",
    href: "#link6",
    children: [
      {
        id: "l7",
        text: "Child Link 7",
        href: "#childlink7",
      },
      {
        id: "l8",
        text: "Child Link 8",
        href: "#childlink8",
        children: [
          {
            id: "l9",
            text: "Child Link 9",
            href: "#childlink9",
          },
          {
            id: "l10",
            text: "Child Link 11",
            href: "#childlink12",
          },
        ],
      },
    ],
  },
];
