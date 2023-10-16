import { pipe, flow } from "fp-ts/function";

// Function composition

const add1 = (n: number) => n + 1;
const minus1 = (n: number) => n - 1;
const double = (n: number) => n * 2;

// n |> add1 |> minus1 |> double

const program1 = (n: number) => pipe(n, add1, minus1, double); // value into pipe line of functions

// Style of writing functions

// 1. double(munus1(add1(n)))
// 2.pipe(n, add1, minus1, double)

console.log(program1(100)); // 200

const program2 = flow(add1, minus1, double);

console.log(program2(100)); // 200
