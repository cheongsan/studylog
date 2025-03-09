//any
// 특정 변수의 타입을 우리가 확실히 모를 때
// let anyVar = 10;
// anyVar = "hello"; // 오류 발생: 타입스크립트는 변수의 타입을 선언하지 않아도 처음 초기화한 값을 사용해 타입을 추론한다
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { }; // 함수
anyVar.toUpperCase(); // 문자열 // 런타임에 오류 발생 -> 타입스크립트의 이점을 포기함
anyVar.toFixed(); // 숫자형
let num = 10;
num = anyVar; // 모든 타입의 변수에 any 타입을 넣을 수 있다.
// unknown
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar; // 오류
// 모든 타입의 변수에 unknwon 타입을 넣을 수 없다.
// unknownVar.toUpperCase(); // 오류
// unknown 타입은 연산도 불가능하다
// 자바스크립트의 typeof 연산자를 사용해 타입을 정제해야 사용할 수 있다
if (typeof unknownVar === "number") {
    num = unknownVar;
}
export {};
// 변수의 값을 모를 때는 unknown 타입을 사용하는 것이 좋다.
