/*
 * 함수 타입 표현식(Function Type Expression): 타입 별칭을 이용해 함수를 정의할 수 있다
 */

type Operation = (a: number, b: number) => number;

// 타입 별칭을 사용하지 않아도 사용할 수 있다.
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니쳐(콜 시그니쳐)
// function func(a: number):void {}
// 함수를 작성하고 함수를 정의하는 것과 비슷하게 별도의 함수 타입을 정의하는 것
// 자바스크립트의 함수는 객체이기 때문에 중괄호를 사용해 객체 타입과 정의와 비슷한 문법을 사용한다.
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입: 호출 시그니처를 사용할 때 함수(객체)의 추가 프로퍼티를 정의할 수 있다, 객체로도 쓸 수 있고 함수로도 쓸 수 있음
};

const add2: (a: number, b: number) => number = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// add2();
// add2.name;
