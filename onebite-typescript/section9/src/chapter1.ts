/**
 * 분산적인 조건부 타입
 * 유니온과 같이 사용할 때 조건부 타입을 분산적인 조건부 타입으로 사용하기
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// number 타입이 슈퍼타입이므로 -> number 타입으로 추론? XXXXX
// ====> 한번은 number, 한번은 string으로 전달되고 union으로 묶임
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> -> string 타입 추론
// StringNumberSwitch<string> -> number 타입 추론
// ==> 최종적으로 string | number 유니온 타입 추론

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> -> number 타입 추론
// StringNumberSwitch<number> -> string 타입 추론
// StringNumberSwitch<string> -> number 타입 추론
// ==> 최종적으로 number | string 유니온 타입 추론

/**
 * 실용적인 예제
 */
// T가 number, U가 string -> nubmer
// T가 number, U가 number -> never
// T와 U가 같을 때는 타입이 없어짐, T와 U가 다를 땐 해당 타입을 반환
// 특정 유니온 타입으로부터 특정 타입만 제거하기
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Exclude<number, string> -> number 타입 추론
// Exclude<string, string> -> never 타입 추론
// Exclude<boolean, string> -> boolean 타입 추론
// ==> number | never | boolean 유니온 타입 추론
// ====> 유니온 타입에 never 타입이 있으면 사라진다.
// =====> 최종적으로 number | boolean 유니온 타입 추론

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// Extract<number, string> -> never 타입 추론
// Extract<string, string> -> string 타입 추론
// Extract<boolean, string> -> never 타입 추론
// ==> never | string 유니온 타입 추론
// ====> 유니온 타입에 never 타입이 있으면 사라진다.
// =====> 최종적으로 string 타입 추론

/**
 * 분산적인 조건부 타입으로 사용하지 않기
 */
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
// type B = Extract<number | string | boolean, string>; // 거짓, number로 추론
