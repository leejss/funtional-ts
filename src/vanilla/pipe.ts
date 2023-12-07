/**
 * @description pipelining 2 functions
 * */
export const pipe2 =
  <T, U>(fn1: (x: T) => U) =>
  <V>(fn2: (x: U) => V) =>
  (x: T) =>
    fn2(fn1(x));

/**
 * @description pipelining 3 functions
 * */
export const pipe3 =
  <T, U>(fn1: (x: T) => U) =>
  <V>(fn2: (x: U) => V) =>
  <W>(fn3: (x: V) => W) =>
  (x: T) =>
    fn3(fn2(fn1(x)));

// let's create another pipe function
// const value = pipeV(2, double, double)
