/**
 * 분산적인 조건부 타입
 * 유니온과 같이 사용할 때 조건부 타입을 분산적인 조건부 타입으로 사용하기
 */
let a;
let b;
// number 타입이 슈퍼타입이므로 -> number 타입으로 추론? XXXXX
// ====> 한번은 number, 한번은 string으로 전달되고 union으로 묶임
let c;
// StringNumberSwitch<number> -> string 타입 추론
// StringNumberSwitch<string> -> number 타입 추론
// ==> 최종적으로 string | number 유니온 타입 추론
let d;
export {};
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
