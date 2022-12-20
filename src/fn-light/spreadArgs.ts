export default function spreadArgs<Return>(fn: (...args: unknown[]) => Return) {
  return function <T>(argArr: T[]) {
    fn(...argArr);
  };
}
