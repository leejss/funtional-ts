import { describe, it } from "vitest";
import each from "../each";

describe("each test", () => {
  it("test", () => {
    each([1, 2, 3, 4, 5], (v) => {
      console.log(v);
    });
  });
});
