import { describe, it, expect } from "vitest";
import filter from "./filter";

describe("filter test", () => {
  it("should filter list", () => {
    const sample = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const result = filter((v) => v % 2 === 0, sample);
    expect(result).toStrictEqual([0, 2, 4, 6, 8]);
  });

  it("should filter list 2", () => {
    const sample = [0, false, true, 123, ""];
    const result = filter(Boolean, sample);
    expect(result).toStrictEqual([true, 123]);
  });
});
