import { expect, it } from "vitest";
import gwMerge from "./gw-merge";

it("merges multiple groundwork prefixes", () => {
  const gw = "gw-mx-2 gw-px-2";
  const gww = "gww-px-4 gww-text-black-500";
  const gwfoo = "gwfoo-text-white-500";
  const user = "text-gray-500 text-sm";
  expect(gwMerge(gw, gww, gwfoo, user)).toBe(
    "gw-mx-2 gww-px-4 text-gray-500 text-sm",
  );
});

it("merges negative class with positive class", () => {
  const p2 = "-gww-p-2";
  expect(gwMerge("gww-p-1 gww-bg-green-100", p2)).toEqual(
    "gww-bg-green-100 -gww-p-2",
  );
});

it("merges positive class with negative class", () => {
  const p2 = "gww-p-2";
  expect(gwMerge("-gww-p-1 gww-bg-green-100", p2)).toEqual(
    "gww-bg-green-100 gww-p-2",
  );
});

it("merges negative class with negative class", () => {
  const p2 = "-gww-p-2";
  expect(gwMerge("-gww-p-1 gww-bg-green-100", p2)).toEqual(
    "gww-bg-green-100 -gww-p-2",
  );
});

it("merges both negative formats", () => {
  expect(gwMerge("gw--mx-4 -gw-my-4 -gww-mx-2 my--2")).toBe("-gww-mx-2 my--2");
});
