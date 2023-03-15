import { describe, it, expect } from "vitest";
import map from "./map";

describe("map test", () => {
  it("should be iterating functor", () => {
    const sample = [1, 2, 3, 4];
    const result = map((a) => a + 1, sample);
    expect(result).toStrictEqual([2, 3, 4, 5]);
    const result2 = map((a) => `${a}${a}`, sample);
    expect(result2).toStrictEqual(["11", "22", "33", "44"]);
  });
});
