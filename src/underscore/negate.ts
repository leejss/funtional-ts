// 함수 실행의 결과를 부정
export default function negate<Arg, T>(func: (...args: Arg[]) => T) {
  return (...args: Arg[]) => {
    return !func(...args);
  };
}
