import * as _ from "underscore";

_.each([1, 2, 3, 4, 5], (v) => {
  console.log(v);
  return false;
});
