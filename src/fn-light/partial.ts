import type { GeneralFucntion } from "../underscore/@types";

// Return partiallyApplied closure
export default function partial(fn: GeneralFucntion, ...presetArgs: any) {
  return (...laterArgs: any) => {
    return fn(...presetArgs, ...laterArgs);
  };
}

// const getSome =  partial(fetch, url)
// getSome() // calling the function and return the result
