import { expect, it } from "vitest";
import gwMerge from "./gw-merge";

it("merges groundwork, groundwork water and user classes", () => {
  const gw = ["gw:mx-2 gw:px-2 gw:cursor-pointer", "gw:cursor-cell"];
  const gww = "gww:mr-4 gww:text-lg";
  const user = "px-5 text-gray-500 text-sm";
  expect(gwMerge(gw, gww, user)).toBe(
    "gw:mx-2 gw:cursor-cell gww:mr-4 px-5 text-gray-500 text-sm",
  );
});

it("merges negative class with positive class", () => {
  const gw = "gw:-p-2";
  const user = "gw:p-1 gw:bg-green-100";
  expect(gwMerge(gw, user)).toEqual("gw:p-1 gw:bg-green-100");
});

it("merges positive class with negative class", () => {
  const gw = "gw:p-2";
  const user = "gw:-p-1 gw:bg-green-100";
  expect(gwMerge(gw, user)).toEqual("gw:-p-1 gw:bg-green-100");
});

it("merges negative class with negative class", () => {
  const gw = "gw:-p-2";
  const user = "gw:-p-1 gw:bg-green-100";
  expect(gwMerge(gw, user)).toEqual("gw:-p-1 gw:bg-green-100");
});

it("merges both negative formats", () => {
  const gw = "gw:-mx-4 gw:-my-4";
  const user = "gw:-mx-2 my-2";
  expect(gwMerge(gw, user)).toEqual("gw:-mx-2 my-2");
});

it("handles a complex merge", () => {
  const classes = [
    "gw:cursor-pointer gw:relative gw:isolate gw:inline-flex gw:items-center gw:justify-center gw:gap-x-2 gw:font-semibold, gw:data-disabled:opacity-50",
    "gw:rounded-sm",
    "gw:px-4 gw:py-2 gw:text-sm",
    "gw:bg-emerald-600 gw:text-white gw:border gw:border-emerald-700/90 gw:hover:bg-emerald-600/90 gw:active:bg-emerald-600/80",
    "",
    "",
    undefined,
  ];
  expect(gwMerge(classes)).toEqual(
    "gw:cursor-pointer gw:relative gw:isolate gw:inline-flex gw:items-center gw:justify-center gw:gap-x-2 gw:font-semibold, gw:data-disabled:opacity-50 gw:rounded-sm gw:px-4 gw:py-2 gw:text-sm gw:bg-emerald-600 gw:text-white gw:border gw:border-emerald-700/90 gw:hover:bg-emerald-600/90 gw:active:bg-emerald-600/80",
  );
});

// gw:relative
// gw:isolate
// gw:inline-flex
// gw:items-center
// gw:justify-center
// gw:gap-x-2
// gw:font-semibold,
// gw:data-disabled:cursor-not-allowed
// gw:data-disabled:opacity-50
// gw:rounded-sm
// gw:px-4
// gw:py-2
// gw:text-sm
// gw:text-white
// gw:border
// gw:border-emerald-700/90
// gw:active:bg-emerald-600/80
