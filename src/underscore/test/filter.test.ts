import { describe, it } from "vitest";
import filter from "../filter.js";

describe("filter test", () => {
  it("test1", () => {
    const result = filter([1, 2, 3, 4, 5, 6], (v: number) => {
      return v > 3;
    });
    console.log(result);
  });

  it("test2", () => {
    const result = filter(
      {
        a: 1,
        b: 2,
        c: 3,
      },
      (v: number) => {
        return v > 1;
      },
    );
    console.log(result);
  });
});
