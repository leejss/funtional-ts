import { describe, it } from "vitest";
import _if from "../if";

describe("if test", () => {
  it("test", () => {
    const ifOld = _if(
      (val: number) => val > 1,
      () => {
        console.log("greather than 1");
      },
      () => {
        console.log("smaller than 1");
      },
    );

    ifOld(0);
  });
});
