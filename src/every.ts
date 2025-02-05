export default function every<T>(list: T[], predicate: (arg: T) => boolean) {
  for (const item of list) if (!predicate(item)) return false;
  return true;
}
