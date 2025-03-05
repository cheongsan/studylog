/**
 * 조건부 타입
 */

// 자바스크립트 삼항연산자를 사용해 조건에 맞는 타입을 만들기
// string 을 확장하면 -> string 타입 / 그렇지 않으면 number 타입
// number는 string의 서브 타입이 아니므로 number 타입으로 추론됨
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjA가 슈퍼 타입, number 타입으로 추론됨
type B = ObjB extends ObjA ? number : string;

/*
 * 제네릭과 조건부 타입
 */
// T가 string -> number / T가 number -> string
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 함수 내부에서는 조건부 타입이 어떻게 될지 알 수 없다. -> any 타입으로 단언 + 함수 오버로딩
// 오버로드 시그니처
function removeSpace<T>(text: T): T extends string ? string : undefined;
// 구현 시그니처 안에서 조건부 타입을 추론할 수 있게 된다.
function removeSpace(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

// let result = removeSpace("hi im onion.koongya") as string;
let result = removeSpace("hi im onion.koongya");
result.toUpperCase();

let result2 = removeSpace(undefined);
