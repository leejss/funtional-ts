import { describe, it } from "vitest";
import todos from "../data/todos";
import every from "../every";

describe("every test", () => {
  it("filter", () => {
    console.log(every(todos, (todo) => todo.completed));
  });
});
