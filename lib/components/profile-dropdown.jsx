import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import Link from "./navigation/link";

function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data).then((buffer) => {
    const hashArray = Array.from(new Uint8Array(buffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
}

function Gravatar({ email }) {
  const [gravatarUrl, setGravatarUrl] = useState(
    "https://www.gravatar.com/avatar/unknown?d=identicon"
  );
  useEffect(() => {
    async function getGravatarUrl() {
      const hash = await sha256(email);
      setGravatarUrl(`https://www.gravatar.com/avatar/${hash}?d=identicon`);
    }
    getGravatarUrl();
  }, [email]);
  return (
    <img
      className="gw-h-8 gw-w-8 gw-rounded-full"
      src={gravatarUrl}
      aria-label="Gravatar profile image"
      alt="Gravatar profile image"
    />
  );
}

function ProfileDropdown({
  username,
  email,
  links = [],
  showLogout = false,
  onLogout,
}) {
  return (
    <Menu as="div" className="gw-relative gw-ml-4 gw-flex-shrink-0">
      <div>
        <Menu.Button className="gw-relative gw-flex gw-rounded-full gw-bg-white gw-focus:gw-outline-none">
          <span className="gw-absolute gw--inset-1.gw-5" />
          <span className="gw-sr-only">Open user menu</span>
          {email ? (
            <Gravatar email={email} />
          ) : (
            <strong className="gw-inline-block gw-h-8 gw-w-8 gw-rounded-full gw-overflow-hidden gw-text-nav-black gw-text-xl gw-bg-nav-gray">
              <span className="gw-align-middle">
                {username ? username[0].toUpperCase() : "U"}
              </span>
            </strong>
          )}
        </Menu.Button>
      </div>
      {links && links.length > 0 ? (
        <Menu.Items className="gw-absolute gw-right-0 gw-z-10 gw-mt-2 gw-w-48 gw-origin-top-right gw-rounded-sm gw-bg-white gw-py-1 gw-shadow-lg gw-ring-1 gw-ring-black gw-ring-opacity-5 gw-focus:gw-outline-none">
          {links.map((item) => (
            <Menu.Item key={item.text}>
              <Link
                key={item.id}
                href={item.href}
                className="gw-block gw-px-4 gw-py-2 gw-text-sm gw-text-gray-700 gw-hover:gw-bg-gray-100"
              >
                {item.text}
              </Link>
            </Menu.Item>
          ))}
          {showLogout ? (
            <Menu.Item>
              <button
                onClick={onLogout}
                className="gw-block gw-w-full gw-px-4 gw-py-2 gw-text-sm gw-text-left gw-text-gray-700 gw-hover:gw-bg-gray-100"
              >
                Logout
              </button>
            </Menu.Item>
          ) : null}
        </Menu.Items>
      ) : null}
    </Menu>
  );
}

export { ProfileDropdown };
