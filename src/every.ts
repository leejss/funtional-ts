// check list
export default function every<T>(list: T[], predicate: (arg: T) => boolean) {
  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false;
  }
  return true;
}
