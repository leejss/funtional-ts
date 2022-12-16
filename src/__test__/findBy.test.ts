import { describe, it } from "vitest";
import users from "../data/users";
import findBy from "../findBy";

describe("filter test", () => {
  it("filter", () => {
    console.log(findBy(users, "gender", "male"));
  });
});
