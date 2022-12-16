// make object with key and value
function object<V>(key: string, val: V) {
  return {
    key: val,
  };
}

// check object's structural sameness
function match<T extends Object, R extends Object>(obj: T, obj2: R) {
  for (const k in obj2) {
    //  check key
    if (!(k in obj)) return false;
    // check value
    if (obj[k] !== obj2[k]) return false;
  }
  return true;
}

export default function bmatch<T, R>(obj2: R, val?: R[keyof R]) {
  if (arguments.length === 2) {
    obj2 = object(obj2 as string, val);
  }
  return (obj: T) => {
    return match(obj, obj2);
  };
}

// bmatch("name", "bj") => check single property
// bmatch({name: "bj", age: "23"}) => check multiple properties
