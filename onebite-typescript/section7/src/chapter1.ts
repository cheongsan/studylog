/*
 * 제네릭의 타입 변수 응용하기
 */

// 사례 1: 매개변수의 타입이 다른 상황 -> 타입 변수를 여러개 선언한다
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// T -> string, U= number
const [a, b] = swap("1", 2);

// 사례 2
// 타입 변수 T의 타입을 호출하기 전에 타입스크립트는 unknown 타입으로 추론함 -> unknwon 타입의 인덱스를 접근할 수 없음
// -> T 배열 타입으로 수정 -> 어떤 타입이라도 배열이므로 인덱스 접근 가능

// T = ( number | string )[] 유니온 타입
// function returnFirstValue<T>(data: T[]) {

// 튜플타입
// [첫번째 요소 T, ... unkonwon[] 나머지 요소들의 타입은 모름]
// 첫번째 요소는 T이므로 number 타입으로 반환
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue(["hello", "mynameis"]);

let numstr = returnFirstValue([1, "hello", "mynameis"]);

// 사례 3: 타입 변수에 조건을 달아서 제한하기
// T 는 확장하는 타입: number 타입의 length 프로퍼티가 있는 타입으로 제한하기
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); // 전달 X
