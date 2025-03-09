/*
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * 타입스크립트만 지원, 많은 타입스크립트 라이브러리에서 사용
 */

// 하나의 함수 func
// 모든 매개변수의 타입 number
// 버전1 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
// 버전2 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력

// 오버로드 시그니처: 함수의 버전들을 알려줌
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처: 실제 구현부, 동작하는 영역
// 구현 시그니처에도 매개변수를 반영해야한다.
// func(a: number, b: number, c: number) -> 첫번째 오버로드 시그니처는 의미가 없어짐 -> 선택적 프로퍼티 사용하여 모든 시그니처가 의미 있도록 함
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 오버로드 시그니처를 가지고 있으면 구현 시그니처를 따라가지 않고 오버로드 시크니처를 따라간다
// func(); // 오류
func(1); // 허용
// func(1, 2); //오류
func(1, 2, 3); //허용
