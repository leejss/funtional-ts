import { describe, it } from "vitest";
import map from "../map";

describe("underscore map test", () => {
  it("test", () => {
    console.log(
      map([1, 2, 3, 4], (v: number) => {
        return v + 2;
      }),
    );
  });
  it("test", () => {
    console.log(
      map({ a: 1, b: 2 }, (v: number) => {
        return v + 2;
      }),
    );
  });
});
