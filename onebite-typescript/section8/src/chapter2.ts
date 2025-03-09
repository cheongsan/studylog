/**
 * keyof 연산자
 * 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

// typeof 연산자와 사용하기
// typeof person === "object"
// typeof 연산자를 타입 정의에 사용하면, 어떤 변수의 타입을 추출하는데 사용할 수 있다
type Person = typeof person;

// 모든 키들을 유니온으로 정의하면 비효율적이다. -> keyof 연산자 사용
// function getPropertyKey(person: Person, key: "name" | "age") {

// keyof 연산자는 모든 프로퍼티를 유니온 타입으로 생성해준다
// "name" | "age"

// keyof 연산자는 무조건 타입으로만 사용할 수 있다.
// function getPropertyKey(person: Person, key: keyof Person) {

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "양파쿵야",
  age: 27,
};

getPropertyKey(person, "name"); // 양파쿵야
