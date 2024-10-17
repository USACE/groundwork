import { extendTailwindMerge } from "tailwind-merge";

// Code adapted from https://github.com/dcastil/tailwind-merge/issues/412

const gwPrefix = "gw-";
const regex = /^(-?)(gw\w*-)(-?)(.*)/;

/**
 * Resolves conflicts between bare or groundwork-prefixed tailwind classNames.
 *
 * This function accepts any number of bare or groundwork-prefixed tailwind
 * classNames as strings and returns a className string with conflicts removed
 * and prefixes retained.  The last-provided classNames take precedence.
 *
 * Groundwork prefixes are required to be in the format of "gw{\w*}-", e.g.
 * "gw-", "gww-", "gwtest-", "gwmap-", etc.
 *
 * NOTE: This function currently utilizes the experimentalParseClassName
 * key in extendTailwindMerge, which is an experimental feature.  Updates
 * to tailwind-merge may introduce breaking changes.  If gwMerge breaks,
 * that's probably the first thing to check.
 */
const gwMerge = extendTailwindMerge({
  prefix: gwPrefix,
  experimentalParseClassName: ({ className, parseClassName }) => {
    const parsed = parseClassName(className);
    const match = parsed.baseClassName.match(regex);
    const isNegative = checkNegative(parsed.baseClassName, match);
    const baseClass = match ? match[4] : parsed.baseClassName;
    const unsignedClass = baseClass.startsWith("-")
      ? baseClass.substring(1)
      : baseClass;
    const prefixedClass = gwPrefix + unsignedClass;
    const finalClass = (isNegative ? "-" : "") + prefixedClass;

    return {
      ...parsed,
      baseClassName: finalClass,
    };
  },
});

/**
 * Determine if a tailwind className is negative.
 * @param {string} className The base className from tailwind.
 * @param {RegExpMatchArray|null} match The match object from the groundwind prefix regex.
 * @returns {boolean} True when a negative tailwind className, false otherwise.
 */
const checkNegative = (className, match) => {
  if (!match) {
    return className.startsWith("-");
  } else {
    return match[1] || match[3];
  }
};

export { gwMerge };
export default gwMerge;
