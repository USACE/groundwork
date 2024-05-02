import ParamsTable from "../params-table";
import { queryOptionsParam } from "./shared-docs";

const CdaParamsTable = ({ requestObject, requestType }) => {
  const hookParams = [
    {
      name: "cdaParams",
      type: "object",
      required: true,
      desc: (
        <>
          Parameters provided to CDA for a {requestObject} {requestType}{" "}
          request. Core parameters are listed below. Check the{" "}
          <a
            href="https://cwms-data.usace.army.mil/cwms-data/swagger-ui.html"
            className="gw-underline"
          >
            CDA Swagger Docs
          </a>{" "}
          for a full listing.
        </>
      ),
    },
    {
      name: "cdaUrl",
      type: "string",
      required: false,
      desc: "An alternative URL for the CDA instance if not using the default (e.g. for testing in a development environment).",
    },
    queryOptionsParam,
  ];

  return <ParamsTable paramsList={hookParams} />;
};

export { CdaParamsTable };
export default CdaParamsTable;
