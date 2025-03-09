/*
 * 인터페이스 선언 합침(Declaration Merging)
 */

// cf) 타입 별칭은 동일한 이름으로 선언하면 오류가 발생한다.
// type Person = {
//   name: string;
// };

// type Person = {
//   age: number;
// };

// 타입 인터페이스는 동일한 이름으로 선언해도 오류가 발생하지 않는다.
// 선언 합침: 동일한 이름으로 선언된 인터페이스는 합쳐진다
interface Person {
  name: string;
}

interface Person {
  // name: number; // 충돌은 허용되지 않는다
  age: number;
}

// cf) 인터페이스 확장과 선언 합침은 다르다
// 선언 합침은 서브 타입으로 선언해도 오류가 발생한다
interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "양파쿵야",
  age: 27,
};

/*
 * 모듈 보강
 */
// cf) 라이브러리의 모듈을 보강하는 경우 node_modules 파일을 가져와서 진행함

// 원래 제공되는 타입스크립트 라이브러리로 가정
interface Lib {
  a: number;
  b: number;
}

// 새로 필요한 프로퍼티를 정의
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 새로운 프로퍼티가 필요함
};
