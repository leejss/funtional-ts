export default function find<T>(
  list: T[],
  predicate: (arg: T, idx?: number, list?: T[]) => boolean,
) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i], i, list)) return list[i];
  }
}
