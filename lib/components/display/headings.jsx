import clsx from "clsx";

function H1({ className, children, ...props }) {
  const cls = clsx("gw-text-3xl gw-font-bold", className);
  return (
    <h1 className={cls} {...props}>
      {children}
    </h1>
  );
}

function H2({ className, children, ...props }) {
  const cls = clsx("gw-text-2xl gw-font-bold", className);
  return (
    <h2 className={cls} {...props}>
      {children}
    </h2>
  );
}

function H3({ className, children, ...props }) {
  const cls = clsx("gw-text-xl gw-font-bold", className);
  return (
    <h3 className={cls} {...props}>
      {children}
    </h3>
  );
}

function H4({ className, children, ...props }) {
  const cls = clsx("gw-text-lg gw-font-bold", className);
  return (
    <h4 className={cls} {...props}>
      {children}
    </h4>
  );
}

export { H1, H2, H3, H4 };
