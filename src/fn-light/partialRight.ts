export default function partialRight<Return>(fn: (...args: any) => Return, ...presetArgs: any) {
  return (...args: any) => {
    return fn(...args, ...presetArgs);
  };
}
