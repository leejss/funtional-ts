import { describe, it } from "vitest";
import todos from "../data/todos";
import filter from "../filter";
import map from "../map";

describe("map test", () => {
  // it("map", () => {
  //   console.log(map(todos, (todo) => todo.title));
  // });

  it("map + filter", () => {
    console.log(
      map(
        filter(todos, (todo) => todo.completed),
        (todo) => todo.title,
      ),
    );
  });
});
