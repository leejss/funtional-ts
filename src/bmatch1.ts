export default function bMatch<T>(key: keyof T, value: T[keyof T]) {
  return (obj: T) => {
    return obj[key] === value;
  };
}
