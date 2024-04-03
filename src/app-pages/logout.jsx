import { useEffect } from "react";
import { useConnect } from "redux-bundler-hook";

function Logout() {
  const { doUpdateUrl } = useConnect("doUpdateUrl");

  useEffect(() => {
    doUpdateUrl("/");
  }, [doUpdateUrl]);

  return <div className="flex justify-center mt-12">Logging out</div>;
}

export default Logout;
export { Logout };
