export default function toArray<T>(list: T[] | Object) {
  return Array.isArray(list) ? list : Object.values(list);
}
