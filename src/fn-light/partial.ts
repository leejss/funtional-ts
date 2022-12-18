export default function partial(fn: Function, ...presetArgs: any) {
  return (...laterArgs: any) => {
    return fn(...presetArgs, ...laterArgs);
  };
}

// const getSome =  partial(ajax, url)
// getSome() // calling the function and return the result
