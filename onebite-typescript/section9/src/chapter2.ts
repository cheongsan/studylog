/**
 * infer
 * 조건부 타입에서 특정 타입만 추론
 */

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<FuncA>; // string 타입 추론
// type B = ReturnType<FuncB>; // never 타입 추론, 결과가 number 되길 원함

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string 타입 추론
type B = ReturnType<FuncB>; // number 타입 추론
type C = ReturnType<number>; // never 타입 추론: 조건식이 참이 되는 슈퍼 타입을 추론할 수 없어 never 타입이 추론된다.

/**
 * 예제
 */
// 1. T는 Promise 타입이어야 한다.
// 2. Promise 타입의 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string
