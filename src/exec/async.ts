// 함수를 받아서 함수를 리턴 => 그 사이에 클로저를 만든다.
function wrap(fn: Function) {
  return function (...args: any) {
    return fn(...args);
  };
}
