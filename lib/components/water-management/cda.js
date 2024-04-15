const DEFAULT_CDA_URL = "https://cwms-data-test.cwbi.us/cwms-data";

/**
 * Create a CDA request URL string by appending provided endpoint and parameters
 * to the base CDA URL.  The CDA URL is chosen in the following order of preference:
 * 1. cdaUrl parameter supplied directly to this function
 * 2. Global GW_USER_CDA_URL variable set by a consuming application
 * 3. DEFAULT_CDA_URL const set in this file
 * @param {string} endpoint The "base" of the API call (before parameters).
 * @param {string} paramStr Request parameters in the form of "parameter=value&parameter=value".
 * @param {string} [cdaUrl] A custom CDA URL to use.
 * @returns A full CDA request URL string.
 */
export const buildRequest = (endpoint, paramStr, cdaUrl) => {
  const baseCdaUrl = cdaUrl ?? window.GROUNDWORK_CDA_URL ?? DEFAULT_CDA_URL;
  const cdaRequest = baseCdaUrl + endpoint + "?" + paramStr;
  return cdaRequest;
};
