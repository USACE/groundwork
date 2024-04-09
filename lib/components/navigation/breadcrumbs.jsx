import clsx from "clsx";
import { MdHome } from "react-icons/md";
import { VscChevronRight } from "react-icons/vsc";

function BreadcrumbItem({ className, href, text }) {
  const cls = clsx(
    "gw-text-gray-300 hover:gw-text-gray-500 last:gw-text-gray-900",
    className
  );
  return (
    <li className={cls}>
      <div className="gw-flex gw-items-center">
        <VscChevronRight
          size={18}
          aria-hidden="true"
          color="rgb(156 163 175)"
        />
        <a
          href={href}
          className="gw-ml-2 gw-text-nowrap  gw-hover:gw-underline"
        >
          {text}
        </a>
      </div>
    </li>
  );
}

function Breadcrumbs({ className, children }) {
  const cls = clsx(
    "gw-flex gw-flex-nowrap gw-items-center gw-space-x-2 gw-py-4 gw-overflow-x-auto gw-hide-scrollbar",
    className
  );
  return (
    <ol className={cls}>
      <li>
        <div>
          <a href="/" className="gw-text-gray-300 gw-hover:gw-text-gray-500">
            <MdHome size={22} />
            <span className="gw-sr-only">Home</span>
          </a>
        </div>
      </li>
      {children}
    </ol>
  );
}

export default Breadcrumbs;
export { Breadcrumbs, BreadcrumbItem };
