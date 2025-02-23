/*
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/*
 * 1. 합집합 - Union 타입
 */
let a: string | number | boolean | undefined | null | {};
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입
// 두 타입의 어느 한쪽이 슈퍼,서브타입은 아니다.
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

// 타입 별칭을 사용해서도 유니온 타입을 사용할 수 있다.
type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "", //오류
// };

/*
 * 2. 교집합 - Intersection 타입
 */
let variable: string & number; // 존재할 수 없음, never타입
// 보통 기본 타입에서는 교집합이 없음, never타입
// 객체 타입에서 주로 사용한다

// type Dog = {
//     name: string;
//     color: string;
//   };

//   type Person = {
//     name: string;
//     language: string;
//   };

type Intersection1 = Dog & Person;

let intersection1: Intersection1 = {
  name: "",
  color: "",
  language: "",
};
