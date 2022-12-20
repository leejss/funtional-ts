import { describe, expect, it } from "vitest";
import unary from "./unary";

describe("unary test", () => {
  it("test", () => {
    const oneArg = unary((...arg) => {
      return arg;
    });
    expect(oneArg(1, 2, 3, 4)).toEqual([1]);
  });

  it("test2", () => {
    const result = [1, 2, 3, 4].map(unary(parseInt));
    console.log(result);
  });
});
