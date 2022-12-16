import { describe, it } from "vitest";
import bMatch from "../bmatch1";
import users from "../data/users";
import filter from "../filter";

describe("bmatch test", () => {
  it("bmatch", () => {
    console.log(filter(users, bMatch("gender", "male")));
  });
});
