import { describe, it } from "vitest";
import curry from "./curry";

describe("curry test", () => {
  it("test", () => {
    const curried = curry((a: number, b: number) => {
      return a + b;
    });
    const a = curried(1)(2);
    console.log({ a });
  });

  it("curried sum", () => {
    const tripleSum = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(tripleSum);
    console.log(curried(1)(2)(3));
  });
});
