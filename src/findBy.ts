export default function findBy<T>(list: T[], key: keyof T, val: T[keyof T]) {
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === val) return list[i];
  }
}
