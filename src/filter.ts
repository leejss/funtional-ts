export default function filter<T>(list: T[], predicate: (arg: T) => boolean) {
  const newList: T[] = [];

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) newList.push(list[i]);
  }

  return newList;
}
