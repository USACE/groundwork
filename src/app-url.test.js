import { describe, expect, it } from "vitest";
import { normalizeUrlForHash } from "./app-url";

describe("normalizeUrlForHash", () => {
  it("extracts the route from a same-origin hash URL under a base path", () => {
    expect(
      normalizeUrlForHash(
        "/groundwork/#/docs/navigation/sidebar",
        "https://usace.github.io/groundwork/",
      ),
    ).toBe("/docs/navigation/sidebar");
  });

  it("extracts the route from a root hash URL", () => {
    expect(
      normalizeUrlForHash(
        "/#/docs/navigation/sidebar",
        "http://localhost:5173/",
      ),
    ).toBe("/docs/navigation/sidebar");
  });

  it("strips the base path from non-hash same-origin URLs", () => {
    expect(
      normalizeUrlForHash(
        "/groundwork/docs",
        "https://usace.github.io/groundwork/",
      ),
    ).toBe("/docs");
  });
});
