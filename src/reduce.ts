export default function reduce<T, U>(arr: T[], fn: (acc: U, val: T, index: number, arr: T[]) => U, initial: U): U {
  let accumulator = initial;
  for (let i = 0; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
