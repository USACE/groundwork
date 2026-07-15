import { useEffect, useState } from "react";

function Essayons() {
  const [essayons, setEssayons] = useState(null);

  useEffect(() => {
    let cancelled = false;

    import("../../img/essayonscrest.png").then((module) => {
      if (!cancelled) {
        setEssayons(module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!essayons) {
    return null;
  }

  return (
    <img
      aria-label="USACE Castle"
      alt="USACE Castle"
      src={essayons}
      className={`gw-absolute gw-bottom-[56px] gw-left-[50%] gw-h-[125px] gw-w-[112px] gw-ml-[-56px]`}
      role="presentation"
    />
  );
}

export default Essayons;
export { Essayons };
