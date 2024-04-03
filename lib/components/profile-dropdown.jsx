import { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";

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
      console.log(email);
      const hash = await sha256(email);
      console.log(hash);
      setGravatarUrl(`https://www.gravatar.com/avatar/${hash}?d=identicon`);
    }
    getGravatarUrl();
  }, [email]);
  return (
    <img
      className="h-8 w-8 rounded-full"
      src={gravatarUrl}
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
    <Menu as="div" className="relative ml-4 flex-shrink-0">
      <div>
        <Menu.Button className="relative flex rounded-full bg-white focus:outline-none">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {email ? (
            <Gravatar email={email} />
          ) : (
            <span className="inline-block h-8 w-8 rounded-full overflow-hidden text-nav-black text-xl font-bold bg-nav-gray">
              <span className="align-middle">
                {username ? username[0].toUpperCase() : "U"}
              </span>
            </span>
          )}
        </Menu.Button>
      </div>
      {links && links.length > 0 ? (
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-sm bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((item) => (
            <Menu.Item key={item.text}>
              <a
                key={item.id}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.text}
              </a>
            </Menu.Item>
          ))}
          {showLogout ? (
            <Menu.Item>
              <button
                onClick={onLogout}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
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
