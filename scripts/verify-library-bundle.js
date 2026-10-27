import fs from "node:fs";

const bundlePath = new URL("../dist/groundwork.es.js", import.meta.url);

if (!fs.existsSync(bundlePath)) {
  throw new Error("Library bundle not found. Run `npm run build-lib` first.");
}

const bundle = fs.readFileSync(bundlePath, "utf8");
const forbiddenPatterns = [
  {
    description: "a browser-side CommonJS require fallback",
    pattern: "Calling `require` for",
  },
  {
    description: "a CommonJS React require call",
    pattern: /\brequire\((['"`])react(?:\/jsx-runtime)?\1\)/,
  },
];

for (const { description, pattern } of forbiddenPatterns) {
  if (
    typeof pattern === "string"
      ? bundle.includes(pattern)
      : pattern.test(bundle)
  ) {
    throw new Error(`ES module bundle contains ${description}.`);
  }
}

console.log(
  "Verified the ES module bundle uses browser-compatible React imports.",
);
