/**
 * Exclude<T, U>
 * 제외하다, 추방하다
 * T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1단계: Exclude<String, boolean> | Exclude<boolean, boolean>
// 2단계: string | never
// 최종적으로 never는 사라지므로 string 타입 추론

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * 함수의 반환값 타입을 추출하는 타입
 */

// funcA의 반환값 추론 ()=>string  ======> T = string
// infer R: T 타입이 서브타입이 되는 타입 추론 =====> R = string
// 결과적으로 string 반환
type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
