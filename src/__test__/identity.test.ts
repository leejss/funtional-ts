import { describe, it } from "vitest";
import filter from "../filter";
import identity from "../identity";

describe("identity test", () => {
  it("test", () => {
    const d = [1, 2, 3, "", 0];
    console.log(filter(d, identity));
  });
});
