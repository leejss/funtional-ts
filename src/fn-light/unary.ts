// pass only one argument
export default function unary<Return>(fn: (...args: any) => Return) {
  return function <T>(...oneArg: T[]) {
    return fn(oneArg[0]);
  };
}
