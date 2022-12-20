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
});
