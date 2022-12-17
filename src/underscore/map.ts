const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

// undefined
function getLength(list: any) {
  return list == null ? undefined : list.length;
}

function isArrayLike(list: any) {
  const length = getLength(list);
  // check length type and index range
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
}

export default function map(data: any, iteratee: Function) {
  const newList = [];
  if (isArrayLike(data)) {
    for (let i = 0; i < data.length; i++) {
      newList.push(iteratee(data[i], i, data));
    }
  } else {
    for (const key in data) {
      if (data.hasOwnProperty(key)) newList.push(iteratee(data[key], key, data));
    }
  }
  return newList;
}
