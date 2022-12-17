// import each from "./each";

import bloop from "./bloop";
import _array from "./_array";

// export default function filter(data: any, predicate: Function) {
//   const newList: any = [];
//   each(data, (val: any, idx: any, data: any) => {
//     if (predicate(val, idx, data)) newList.push(val);
//   });
//   return newList;
// }

const filter = bloop(_array, (bool: boolean, result: any, val: any) => {
  if (bool) result.push(val);
});

export default filter;
