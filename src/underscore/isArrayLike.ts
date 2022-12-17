const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
function getLength(list: any) {
  return list == null ? undefined : list.length;
}

export default function isArrayLike(data: any) {
  const len = getLength(data);
  return typeof len === "number" && len >= 0 && len <= MAX_ARRAY_INDEX;
}
