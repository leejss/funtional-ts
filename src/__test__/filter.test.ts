import { describe, it } from "vitest";
import todos from "../data/todos";
import filter from "../filter";

describe("filter test", () => {
  it("filter", () => {
    console.log(filter(todos, (todo) => todo.completed));
  });
});
