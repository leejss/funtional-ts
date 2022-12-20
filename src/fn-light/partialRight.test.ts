import { describe, it } from "vitest";
import partialRight from "./partialRight";

describe("partialRight test", () => {
  it("test", () => {
    const foo = partialRight((first, last) => {
      console.log(first, last);
    }, "fixed");
    foo("pass");
  });
});
