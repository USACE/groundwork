const CDA_URL = "https://cwms-data-test.cwbi.us/cwms-data";

/**
 * Create a CDA request URL string by appending provided endpoint and parameters
 * to the base CDA_URL.
 * @param {string} endpoint The "base" of the API call (before parameters).
 * @param {string} paramStr Request parameters in the form of "parameter=value&parameter=value".
 * @param {string} [cdaUrl] A CDA URL to use rather than the default.
 * @returns A full CDA request URL string.
 */
export const buildRequest = (endpoint, paramStr, cdaUrl) => {
  let cdaRequest = cdaUrl ?? CDA_URL + endpoint + "?" + paramStr;
  return cdaRequest;
};
