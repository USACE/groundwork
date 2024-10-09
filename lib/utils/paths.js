/**
 * Flattens a nested array of links into a single-level array.
 * Each link object may contain a `children` property, which is an array of nested links.
 * This function recursively extracts all links and their children into a flat array
 * and adds a `path` property indicating the path of parent IDs for each link.
 *
 * @function flattenLinks
 * @param {Array<Object>} links - An array of link objects, each with properties:
 *   - {string} id - The unique identifier of the link.
 *   - {string} text - The display text of the link.
 *   - {string} href - The URL or anchor link.
 *   - {Array<Object>} [children] - An optional array of child link objects.
 * @returns {Array<Object>} A flat array of link objects, where each object has:
 *   - {string} id - The unique identifier of the link.
 *   - {string} text - The display text of the link.
 *   - {string} href - The URL or anchor link.
 *   - {string} path - A dash-separated list of parent IDs indicating the path to this link.
 *
 * @example
 * const links = [
 *   { id: 'l1', text: 'Link 1', href: '#link1' },
 *   { id: 'l2', text: 'Link 2', href: '#link2', children: [
 *     { id: 'l3', text: 'Child Link 3', href: '#childlink3' }
 *   ]}
 * ];
 *
 * const flatLinks = flattenLinks(links);
 * console.log(flatLinks);
 * // Output: [
 * //   { id: 'l1', text: 'Link 1', href: '#link1', path: '' },
 * //   { id: 'l2', text: 'Link 2', href: '#link2', path: '' },
 * //   { id: 'l3', text: 'Child Link 3', href: '#childlink3', path: 'l2' }
 * // ]
 */
function flattenLinks(links, pathDelimiter = " - ") {
  const result = [];

  /**
   * Recursive helper function to flatten links and track their paths.
   *
   * @param {Array<Object>} linkArray - The current array of links to process.
   * @param {string} parentPath - The path of parent IDs leading to the current links.
   */
  function flatten(linkArray, parentPath = "", level = 0) {
    for (const link of linkArray) {
      const currentPath = parentPath
        ? `${parentPath}${pathDelimiter}${link.text}`
        : link.text;
      result.push({
        id: link.id,
        text: link.text,
        href: link.href,
        level: level,
        path: parentPath,
      });

      if (link.children && link.children.length > 0) {
        flatten(link.children, currentPath, level + 1);
      }
    }
  }

  flatten(links);
  return result;
}

export { flattenLinks };
