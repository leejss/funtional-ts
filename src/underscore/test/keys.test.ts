import { describe, it } from "vitest";
import keys from "../keys";

describe("keys map test", () => {
  it("test", () => {
    console.log(
      keys({
        hello: 1,
        bye: 2,
      }),
    );
  });
});
