export default function constant<T>(value: T) {
  return function () {
    return value;
  };
}
