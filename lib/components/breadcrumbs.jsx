import clsx from "clsx";
import { MdHome } from "react-icons/md";
import { VscChevronRight } from "react-icons/vsc";

function BreadcrumbItem({ className, href, text }) {
  const cls = clsx(
    "text-gray-300 hover:text-gray-500 last:text-gray-900",
    className
  );
  return (
    <li className={cls}>
      <div className="flex items-center">
        <VscChevronRight
          size={18}
          aria-hidden="true"
          color="rgb(156 163 175)"
        />
        <a href={href} className="ml-2  hover:underline">
          {text}
        </a>
      </div>
    </li>
  );
}

function Breadcrumbs({ className, children }) {
  const cls = clsx("flex items-center justify-between py-4", className);
  return (
    <nav className={cls}>
      <ol className="flex items-center space-x-2">
        <li>
          <div>
            <a href="/" className="text-gray-300 hover:text-gray-500">
              <MdHome size={22} />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {children}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
export { Breadcrumbs, BreadcrumbItem };
