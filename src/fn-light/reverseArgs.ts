// reverse arguments
export default function reverseArgs<Return>(fn: (...args: any) => Return) {
  return function (...args: any[]) {
    return fn(...args.reverse());
  };
}
