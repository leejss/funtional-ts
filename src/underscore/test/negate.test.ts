import { describe, it } from "vitest";
import negate from "../negate";

describe("negate test", () => {
  it("test", () => {
    const negated = negate(() => true);
    console.log(negated());
  });
});
