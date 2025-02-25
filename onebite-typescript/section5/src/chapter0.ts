/*
 * 인터페이스: 타입에 이름을 지어주는 또 다른 문법
 * 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능을 제공함)
 */

// 인터페이스도 타입 정의가 똑같다

// 인터페이스에 대문자 I를 붙이는 헝가리안 표기법 -> 자바스크립트에서는 잘 사용하지 않는 문법으로 논란이 많음
// UserName 파스칼 표기법, userName 카멜 표기법, user_name 스네이크 표기법을 주로 사용함
// 이름 규칙은 회사의 코드 컨벤션을 따름.

interface Person {
  readonly name: string; // 읽기 전용
  age?: number; // 선택적 프로퍼티
  //   sayHi: () => void; // 매서드 타입, 함수 타입 표현식
  sayHi(): void; // 호출 시그니처

  // 오버로딩: 오버로드 시그니처
  // 매소드의 오버로딩을 구현하고자 하면 호출 시그니처를 사용하는 것을 권장 (함수 타입 표현식을 사용하면 오류 발생)
  sayHi(a: number, b: number): void;
}

// type Func = {
//     (): void;
// }

// 유니온 타입, 인터섹션 => 인터페이스에서는 불가능하다 => 타입 별칭 / 타입 주석 활용
type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person | number = {
  name: "양파쿵야",
  // age:27
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
