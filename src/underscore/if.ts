export default function _if(validator: (...args: any) => boolean, func: Function, alter: Function) {
  return (...args: any) => {
    if (validator(...args)) return func();
    return alter();
  };
}
