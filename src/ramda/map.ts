export default function map<T, R>(fn: (v: T) => R, functor: T[]) {
  let idx = 0;
  let len = functor.length;
  let result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result as R[];
}
