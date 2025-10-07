import { extendTailwindMerge } from "tailwind-merge";

// Known tailwind prefixes that we want to pull out and allow to be overridden.
const knownPrefixes = ["gw", "gww"];

const gwMerge = extendTailwindMerge({
  experimentalParseClassName: ({ className, parseClassName }) => {
    const parsed = parseClassName(className);

    // If parsed has modifiers (variant chain), drop `gw` so it won’t create a separate merge bucket.
    // Keep everything else (important flag, negatives, other variants) intact.
    if (Array.isArray(parsed.modifiers) && parsed.modifiers.length) {
      const hasKnown = knownPrefixes.some((prefix) => {
        return parsed.modifiers.includes(prefix);
      });
      if (hasKnown) {
        return {
          ...parsed,
          // remove all occurrences of the gw modifier from the chain
          modifiers: parsed.modifiers.filter((m) => {
            return !knownPrefixes.includes(m);
          }),
        };
      }
    }

    return parsed;
  },
});

export { gwMerge };
export default gwMerge;
