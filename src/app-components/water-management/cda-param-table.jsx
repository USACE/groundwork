import ParamsTable from "../params-table";

const CdaParamsTable = ({ requestObject, requestType }) => {
  const hookParams = [
    {
      name: "cdaParams",
      type: "object",
      required: true,
      desc: (
        <>
          Parameters provided to CDA for a {requestObject} {requestType}{" "}
          request. See the{" "}
          <a
            href="https://cwms-data.usace.army.mil/cwms-data/swagger-ui.html"
            className="underline"
          >
            CDA Swagger Docs
          </a>
          .
        </>
      ),
    },
    {
      name: "cdaUrl",
      type: "string",
      required: false,
      desc: "An alternative URL for the CDA instance if not using the default (e.g. for testing in a development environment).",
    },
    {
      name: "queryOptions",
      type: "object",
      required: false,
      desc: (
        <>
          Additional options to configure the TanStack Query useQuery request.
          See the{" "}
          <a
            href="https://tanstack.com/query/latest/docs/framework/react/reference/useQuery"
            className="underline"
          >
            TanStack Query Docs
          </a>
          .
        </>
      ),
    },
  ];

  return <ParamsTable paramsList={hookParams} />;
};

export { CdaParamsTable };
export default CdaParamsTable;
