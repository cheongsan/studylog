/*
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 서로소 유니온 대신 다른 방법을 사용해야한다고 가정
function example(animal: Animal) {
  if ("isBrak" in animal) {
    // 강아지
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
// 프로퍼티의 이름을 기준으로 타입을 좁히면 중간에 프로퍼티가 변경되면 타입 좁히기가 정상적으로 작동되지 않을 수 있다.
// -> 사용자 정의 타입 가드 사용
//    자바스크립트에서 '어떤 값이 어떤 객체에 포함된다'를 함수로 별로도 만드는 것과 동일
//
// 타입스크립트는 직접 만든 함수를 사용해 타입을 잘 좁혀주지 않음 -> 함수 자체를 타입 가드 역할을 하도록 지정
// -> 함수의 반환값이 true를 return 하면 Dog 타입으로 지정
function isDog(animal: Animal): animal is Dog {
  // Dog -> true, cat -> false
  // animal.isBark는 Animal 타입이 잘 좁혀지지 않았으므로 오류 -> 타입 단언을 사용
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal;
  } else {
    // 고양이
    animal;
  }
}
