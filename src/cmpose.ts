// compose(func1, func2) => func2의 return value를 func1에 전달.
export default function compose<T extends Function>(...fns: T[]) {
  let start = fns.length - 1;
  return (...args: any) => {
    let i = start;
    let result = fns[i](...args);
    while (i--) {
      result = fns[i](result);
    }
    return result;
  };
}
