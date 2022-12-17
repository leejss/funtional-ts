import isObject from "./isObject";

export default function keys(obj: any) {
  return isObject(obj) ? Object.keys(obj) : [];
}
