import { useMemo } from "react";
import gwMerge from "../../gw-merge";
import { MdHome } from "react-icons/md";
import { VscChevronRight } from "react-icons/vsc";
import Link from "./link";

function BreadcrumbItem({ className, href, text }) {
  const breadcrumbItemClass = useMemo(() => {
    return gwMerge(
      "gw:text-gray-300 gw:hover:text-gray-500 gw:last:text-gray-900",
      className,
    );
  }, [className]);
  return (
    <li className={breadcrumbItemClass}>
      <div className="gw:flex gw:items-center">
        <VscChevronRight
          size={18}
          aria-hidden="true"
          color="rgb(156 163 175)"
        />
        <Link
          href={href}
          className="gw:ml-2 gw:text-nowrap  gw:hover:gw:underline"
        >
          {text}
        </Link>
      </div>
    </li>
  );
}

function Breadcrumbs({ className, children }) {
  const breadcrumbsClass = useMemo(() => {
    return gwMerge(
      "gw:flex gw:flex-nowrap gw:items-center gw:space-x-2 gw:py-4 gw:overflow-x-auto gw:hide-scrollbar",
      className,
    );
  }, [className]);
  return (
    <ol className={breadcrumbsClass}>
      <li>
        <div>
          <Link href="/" className="gw:text-gray-300 gw:hover:gw:text-gray-500">
            <MdHome size={22} />
            <span className="gw:sr-only">Home</span>
          </Link>
        </div>
      </li>
      {children}
    </ol>
  );
}

export default Breadcrumbs;
export { Breadcrumbs, BreadcrumbItem };
