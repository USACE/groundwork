function FooterLinks({ links = [], columnCount = 2 }) {
  return (
    <ul
      className="list-none"
      style={{
        columnCount: columnCount,
        columnGap: "40px",
        margin: 0,
        padding: "0 0 0 2px",
      }}
    >
      {links.map((link, i) => {
        const target = link.href.startsWith("http") ? "_blank" : "";
        const rel = link.href.startsWith("http") ? "noopener noreferrer" : "";
        return (
          <li key={link.text + i} className="mb-2">
            <a
              href={link.href}
              target={target}
              rel={rel}
              className="hover:underline"
            >
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterLinks;
export { FooterLinks };
