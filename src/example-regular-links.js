const BASE_URL = import.meta.env.BASE_URL;

export default [
  {
    id: "rl0",
    text: "Link 0",
    href: `${BASE_URL}#/docs/navigation/sidebar`,
  },
  {
    id: "rl1",
    text: "Link 1",
    href: `${BASE_URL}#/docs/navigation/sidebar`,
  },
  {
    id: "rl2",
    text: "Link 2",
    href: `${BASE_URL}#/docs/navigation/sidebar`,
    children: [
      {
        id: "rl3",
        text: "Child Link 3",
        href: `${BASE_URL}#/docs/navigation/sidebar`,
        children: [
          {
            id: "rl4",
            text: "Child Link 4",
            href: `${BASE_URL}#/docs/navigation/sidebar`,
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
