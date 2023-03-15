export default function filter<T>(predicate: (t: T) => boolean, list: T[]) {
  let idx = 0;
  let len = list.length;
  let result = [];

  while (idx < len) {
    if (predicate(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }

  return result as T[];
}
