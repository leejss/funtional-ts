// check list
export default function some<T>(list: T[], predicate: (arg: T) => boolean) {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return true;
  }
  return false;
}
