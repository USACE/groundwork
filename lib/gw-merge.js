import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  prefix: "gw-",
});

/**
 * So what we want to do is let consuming applications give us
 * regular tailwind classes, and we need to merge them with classes
 * with a prefix of "gw-". We can do this by extending the tailwind-merge
 * function and passing in the prefix we want to use.
 */
function gwMerge(...classes) {
  // allow space delimited lists of classes
  // map across and add the prefix to any we need to,
  // make sure to keep track of which ones are user supplied
  const extOverrides = {};
  classes = classes
    .join(" ")
    .split(" ")
    .map((cls) => {
      if (cls && !cls.startsWith("gw-")) {
        const newCls = `gw-${cls}`;
        extOverrides[cls] = newCls;
        return newCls;
      }
      return cls;
    });

  // now we can run tailwind-merge
  let classString = twMerge(classes);

  // replace any of the user supplied classes that still exist
  // this feels like it could open up bugs, but I'm not sure
  Object.keys(extOverrides).forEach((cls) => {
    classString = classString.replace(extOverrides[cls], cls);
  });

  return classString;
}

export default gwMerge;
export { gwMerge };
