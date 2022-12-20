// export default function curry(fn: (...args: any) => any) {
//   let arity = fn.length;
//   return (function nextCurried(prevArgs: any) {
//     return function (nextArg: any) {
//       let args = [...prevArgs, nextArg];
//       console.log({ arity });
//       console.log({ args });
//       if (args.length >= arity) return fn(...args);
//       return nextCurried(args);
//     };
//   })([]);
// }

export default function curry(fn: (...args: any) => any) {
  let arity = fn.length; // 원본 함수의 총 인자의 개수를 저장한다.
  function nextCurried(prevArgs: any) {
    return function (nextArg: any) {
      let args = [...prevArgs, nextArg];
      if (args.length >= arity) return fn(...args); // 인자를 전부 호출한 경우 원본 함수를 호출한다.
      return nextCurried(args); // 인자를 전부 부여하지 않은 경우에는 다음 함수를 리턴한다.
    };
  }
  return nextCurried([]);
}
