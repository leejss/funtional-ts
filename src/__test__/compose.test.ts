import { describe, it } from "vitest";
import compose from "../cmpose";

describe("compose test", () => {
  it("test", () => {
    const greet = (name: string) => `hi, ${name}`;
    const exclaim = (statement: string) => statement.toUpperCase() + "!";
    const welcome = compose(exclaim, greet);
    console.log(welcome("james"));
  });
});
