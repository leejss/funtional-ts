export default function filter<T>(
  list: T[],
  predicate: (arg: T, idx?: number, list?: T[]) => boolean,
) {
  const result: T[] = [];

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) {
      result.push(list[i]);
    }
  }

  return result;
}
