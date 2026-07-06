// Normalizes URLs captured from click events into the hash route shape expected
// by redux-bundler. This avoids re-appending BASE_URL or "#" and producing
// duplicated routes when docs are hosted under a subpath.
export function normalizeUrlForHash(url, baseUrl) {
  if (!url) return "/";

  const hashIndex = url.indexOf("#");
  if (hashIndex >= 0) {
    // Internal hash links are already pointing at the target route, so keep
    // only the path after "#".
    return url.slice(hashIndex + 1) || "/";
  }

  let basePath = "/";
  try {
    basePath = new URL(baseUrl, "http://localhost").pathname;
  } catch {
    basePath = "/";
  }

  const normalizedBasePath = `/${basePath.replace(/^\/+|\/+$/g, "")}/`;
  if (normalizedBasePath !== "//" && url.startsWith(normalizedBasePath)) {
    // Same-origin links without a hash still need the deploy subpath removed
    // before they are handed to doUpdateHash.
    return url.slice(normalizedBasePath.length - 1) || "/";
  }

  return url;
}
