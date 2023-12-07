import { expect, test, describe } from "vitest";
import { pipe2, pipe3 } from "./pipe";

describe("pipe", () => {
  const add5 = (n: number) => {
    console.log("add5");
    return n + 5;
  };
  const minus1 = (n: number) => {
    console.log("minus1");
    return n - 1;
  };
  const double = (n: number) => {
    console.log("double");
    return n * 2;
  };

  test("pipe2", () => {
    const program1 = pipe2(add5)(minus1); // call stack: add5 -> minus1
    expect(program1(100)).toBe(104);
  });

  test("pipe3", () => {
    const program2 = pipe3(add5)(minus1)(double); // call stack: add5 -> minus1 -> double
    expect(program2(100)).toBe(208);
  });
});
