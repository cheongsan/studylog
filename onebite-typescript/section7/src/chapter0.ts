/*
 * 제너릭
 */

// 범용적인 함수를 만들고 싶다면? string -> any
// 함수가 매개변수를 그대로 반환하니 any 타입이 아닌 명확한 타입으로 반환하고자 함

// string -> unknown 타입
// 어떤 연산 / 어떤 메서드도 할 수 없음 => 타입 좁히기를 사용해야 함

// -> 제너릭
// <T> 타입 변수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

// 제너릭함수를 호출할 때 타입 변수에 할당되는 타입을 인수를 통해 추론하지 않고 프로그래머가 명시적으로 정의할 수 있다

// 타입 단언
// let arr = func([1, 2, 3] as [number, number,number]);

// 타입 변수 T에 할당할 타입을 정의
let arr = func<[number, number, number]>([1, 2, 3]);
