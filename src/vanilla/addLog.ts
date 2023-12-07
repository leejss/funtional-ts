type AnyFunction = (...args: any[]) => any;

// export const addLog

const someFn = () => {};
someFn.label = "someFn";

const fn = (a: any) => {
  console.log(a.label);
};

console.log(fn(someFn));
