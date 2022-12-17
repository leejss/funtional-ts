function add(a: number, b: number) {
  return a + b;
}

const add10 = add.bind(null, 10);

function flatten<T>(arr: T[]) {
  return (function f(arr, newArr: unknown[]) {
    arr.forEach(function (v) {
      Array.isArray(v) ? f(v, newArr) : newArr.push(v);
    });
    return newArr;
  })(arr, []);
}
// truthy || falsy => truthy
// falshy || falshy => right falshy

// truthy && truthy => right truthy
// truthy && falsy =>  falsy

const a = "hello" || "";
const b = "" || 0;
const c = "tru" && "Rre";
const d = "123" && "";

// 콜백함수로 결과 받기
const add1 = (a: number, b: number, fn: Function) => {
  setTimeout(() => {
    fn(a + b); // 콜백함수로 결과 받기
  }, 1000);
};
