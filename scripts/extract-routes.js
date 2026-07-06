// Extract route paths from routes-bundle.js (no runtime import of React)
// Requires: npm i -D @babel/parser
import fs from "fs";
import path from "path";
import { parse } from "@babel/parser";

const ROUTES_FILE = path.resolve("src/app-bundles/routes-bundle.js");
const SOURCE = fs.readFileSync(ROUTES_FILE, "utf8");

// Parse as ECMAScript with JSX
const ast = parse(SOURCE, {
  sourceType: "module",
  plugins: ["jsx"],
});

// Find: createRouteBundle({ "/a": Comp, "/b": Comp, "*": NotFound }, {...})
function extractRoutes(ast) {
  const routes = [];
  let found = false;

  function walk(node, visitor) {
    if (!node || typeof node !== "object") return;
    visitor(node);
    for (const k in node) {
      const v = node[k];
      if (Array.isArray(v)) v.forEach((c) => walk(c, visitor));
      else walk(v, visitor);
    }
  }

  walk(ast, (node) => {
    if (
      node.type === "CallExpression" &&
      node.callee &&
      node.callee.name === "createRouteBundle" &&
      node.arguments &&
      node.arguments.length >= 1 &&
      node.arguments[0].type === "ObjectExpression"
    ) {
      const obj = node.arguments[0];
      obj.properties.forEach((p) => {
        if (p.type !== "ObjectProperty") return;
        // Only accept string literal keys
        const key =
          p.key.type === "StringLiteral"
            ? p.key.value
            : p.key.type === "Identifier"
              ? p.key.name
              : null;
        if (!key) return;
        // Skip wildcard 404 and obvious dev-only
        if (key === "*" || key.startsWith("data:")) return;
        routes.push(key);
      });
      found = true;
    }
  });

  if (!found) {
    throw new Error(
      "createRouteBundle(...) with an object literal as first arg not found",
    );
  }
  // Dedup & sort
  return Array.from(new Set(routes)).sort();
}

// Optional prefix, set LHCI_PREFIX to prepend
const prefix = process.env.LHCI_PREFIX || "http://localhost:5173/";
console.log("Prefix!", prefix);

const urls = extractRoutes(ast).map((u) =>
  (prefix + u).replace(/\/{2,}/g, "/"),
);

// Write url list to disk for debugging
fs.mkdirSync(".lighthouseci", { recursive: true });
fs.writeFileSync(".lighthouseci/urls.json", JSON.stringify(urls, null, 2));

// Merge into base config → .lighthouserc.gen.json
const baseCfgPath = path.resolve(".lighthouserc.base.json");
const baseCfg = JSON.parse(fs.readFileSync(baseCfgPath, "utf8"));
baseCfg.ci = baseCfg.ci || {};
baseCfg.ci.collect = baseCfg.ci.collect || {};
baseCfg.ci.collect.url = urls;

const genPath = path.resolve(".lighthouserc.gen.json");
fs.writeFileSync(genPath, JSON.stringify(baseCfg, null, 2));
console.log(`Generated ${genPath} with ${urls.length} routes`);
