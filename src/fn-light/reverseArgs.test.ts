import { describe, it } from "vitest";
import reverseArgs from "./reverseArgs";

describe("reverseArgs test", () => {
  it("test", () => {
    const reversed = reverseArgs((a, b, c) => {
      console.log(a, b, c);
    });
    reversed(1, 2, 3);
  });
});
