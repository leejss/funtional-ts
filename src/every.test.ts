import { expect, test } from "bun:test";
import every from "./every";

// bun test src/every.test.ts

test("every.ts:false", () => {
  const list = [false, false, true];
  expect(every(list, (v) => v)).toBe(false);
});

test("every.ts:true", () => {
  const list = [true, true, true];
  expect(every(list, (v) => v)).toBe(true);
});
