export default [
  {
    id: "rl0",
    text: "Link 0",
    href: "/docs/navigation/sidebar",
  },
  {
    id: "rl1",
    text: "Link 1",
    href: "/docs/navigation/sidebar",
  },
  {
    id: "rl2",
    text: "Link 2",
    href: "/docs/navigation/sidebar",
    children: [
      {
        id: "rl3",
        text: "Child Link 3",
        href: "/docs/navigation/sidebar",
        children: [
          {
            id: "rl4",
            text: "Child Link 4",
            href: "/docs/navigation/sidebar",
          },
          {
            id: "rl5",
            text: "Child Link 5",
            href: "#childlink5",
          },
        ],
      },
    ],
  },
 
];
