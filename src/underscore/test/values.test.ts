import { describe, it } from "vitest";
import values from "../values";

describe("underscore values test", () => {
  it("test", () => {
    console.log(
      values({
        a: 1234,
        b: 4567,
      }),
    );
  });
});
