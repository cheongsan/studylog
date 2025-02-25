/*
 * 인터페이스의 확장(상속)
 */

type Animal = {
  name: string;
  color: string;
};

// 슈퍼타입의 프로퍼티를 받아오기
// interface Dog {
//   name: string;
//   age: string;
//   isBark: boolean;
// }

// 인터페이스는 원본 타입이 타입 별칭이라도 확장할 수 있다 => 인터페이스는 객체 타입이면 확장할 수 있다

interface Dog extends Animal {
  //   name: "hello"; // String 리터럴 타입으로 타입을 재지정
  isBark: boolean;
}

const dog: Dog = {
  name: "hello", // 결과적으로 String 리터럴 타입으로 재지정됨
  color: "",
  isBark: true,
};

// 원본 프로퍼티 타입의 서브 타입만 허용
// interface Dog extends Animal {
//   name: number; // 오류: Animal 타입과 Dog 타입이 슈퍼 타입 - 서브 타입 관계가 아니게 됨
//   isBark: boolean;
// }

interface Cat {
  name: string;
  color: string;
  isScratch: boolean;
}

interface Chicken {
  name: string;
  color: string;
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
