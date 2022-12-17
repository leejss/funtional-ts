import { describe, it } from "vitest";
import filter from "../filter.js";

describe("filter test", () => {
  it("test", () => {
    const result = filter([1, 2, 3, 4, 5, 6], (v) => {
      return v > 3;
    });
    console.log(result);
  });
});
