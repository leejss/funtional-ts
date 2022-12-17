import isArrayLike from "./isArrayLike";
import keys from "./keys";

export default function bloop<T>(newData: Function, body: Function) {
  return function (data: any, iteratee: Function) {
    const result = newData(data);
    if (isArrayLike(data)) {
      for (let i = 0; i < result.length; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (let i = 0, k = keys(data), len = k.length; i < len; i++) {
        body(iteratee(data[i], k[i], data), result);
      }
    }
    return result;
  };
}

// bloop(array, )
