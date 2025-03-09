/*
 * 타입 단언 - Assertion
 */
// let person = {} 일 때 type이 Any로 추론되어 프로퍼티를 추가할 수 없음
let person = {};
person.name = "양파쿵야";
person.age = 27;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도", // 객체 리터럴 -> 초과 프로퍼티 검사 작동
}; // 타입 단언
/*
 * 타입 단언의 규칙
 */
// 갑 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이거나 undefined 또는 null이어야 함
// A가 B 슈퍼타입
let num1 = 10;
// A가 B 서브타입
let num2 = 10;
// let num3 = 10 as string;
// 다중 단언
let num3 = 10;
/*
 * Const 단언
 */
// Const로 선언한 것과 동일하게 해줌
let num4 = 10;
// 객체 타입으로 사용할 때 유용함
// 모든 프로퍼티가 read-only 읽기 전용으로 추론됨
let cat = {
    name: "냐옹이",
    color: "yellow",
};
let post = {
    title: "게시글1",
    author: "양파쿵야",
};
//? 옵셔널 체이닝 : Author가 Null, Undefined 없으면 점 표기법 접근시 오류 발생 -> 값 전체가 undefined로 반환해줌
// 옵셔널 체이닝을 사용하니 값 자체가 undefined될 수 있으므로 number에 할당할 수 없음
// const len: number = post.author?.length;
//! Non Null 연산자
// 이 값이 무조건 Null이 아니라고 가정
const len = post.author.length;
export {};
