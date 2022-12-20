import { describe, it } from "vitest";
import spreadArgs from "./spreadArgs";

describe("spreadArgs test", () => {
  it("test", () => {
    const spreadLog = spreadArgs((...arr) => {
      console.log(arr);
    });
    spreadLog([1, 2, 3, 4, 5]);
  });
});
