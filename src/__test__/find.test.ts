import { describe, it } from "vitest";
import users from "../data/users";
import find from "../find";

describe("filter test", () => {
  it("filter", () => {
    console.log(find(users, (user) => user.gender === "male"));
  });
});

// 함수의 조합을 통해 서로의 역할을 분리.
