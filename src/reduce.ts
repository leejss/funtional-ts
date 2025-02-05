type Reducer<T, U> = (acc: U, val: T, index: number, arr: T[]) => U;

export default function reduce<T, U>(
  arr: T[],
  fn: Reducer<T, U>,
  initial: U,
): U {
  let accumulator = initial;
  for (let i = 0; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Reduce : Transforms a list of values into a single value by applying a function to each value and accumulating the results.
// reduce(arr, reducer, accumulator)
