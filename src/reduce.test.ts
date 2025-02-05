import { test, expect } from "bun:test";
import reduce from "./reduce";

// bun test src/reduce.test.ts

test("reduce.ts", () => {
  const arr = [1, 2, 3, 4, 5];
  const result = reduce(arr, (acc, v) => acc + v, 0);
  expect(result).toBe(15);
});
