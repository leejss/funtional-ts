type AnyFn = (...args: any[]) => any;

// Patterns of creating a pipe function
// No type hints
export const createPipe = (...fns: AnyFn[]) => {
  return (x: any) => fns.reduce((v, f) => f(v), x);
};
