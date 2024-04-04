const CDA_URL: string = "https://localhost:7000/lrl-data";

/**
 * Create a CDA request URL string by appending provided endpoint and parameters
 * to the base CDA_URL.
 * @param endpoint The "base" of the API call (before parameters).
 * @param paramStr Request parameters in the form of "parameter=value&parameter=value".
 * @returns A full CDA request URL string.
 */
export const buildRequest = (
  endpoint: string,
  paramStr: string,
  cdaUrl?: string
) => {
  let cdaRequest = cdaUrl ?? CDA_URL + endpoint + "?" + paramStr;
  return cdaRequest;
};
