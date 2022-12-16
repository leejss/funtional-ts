// export default function map<T, R>(list: T[], iteratee: (arg: T) => R) {
//   const newList: R[] = [];
//   for (let i = 0; i < list.length; i++) {
//     newList.push(iteratee(list[i]));
//   }
//   return newList;
// }

export default function map<T, R>(list: T[], iteratee: (arg: T, idx?: number, arr?: T[]) => R) {
  const newList: R[] = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(iteratee(list[i], i, list));
  }
  return newList;
}
