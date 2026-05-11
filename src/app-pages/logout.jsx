import { useEffect } from "react";
import { useConnect } from "redux-bundler-hook";

const BASE_URL = import.meta.env.BASE_URL;

function Logout() {
  const { doUpdateUrl } = useConnect("doUpdateUrl");

  useEffect(() => {
    doUpdateUrl(`${BASE_URL}#/`);
  }, [doUpdateUrl]);

  return <div className="gw-flex gw-justify-center gw-mt-12">Logging out</div>;
}

export default Logout;
export { Logout };
