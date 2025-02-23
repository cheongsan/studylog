/*
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

// Number 리터럴 타입 -> Number 타입: 업캐스팅 허용
num1 = num2;

/*
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string; // 견종 // 추가 프로퍼티
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// Dog -> Animal 업캐스팅 허용
// Animal 슈퍼타입
// Dog 서브타입
animal = dog;

// Animal -> Dog 다운캐스팅 불가
// dog = animal

// 타입스크립트는 구조적 타입 시스템
// name과 color만 가지고 있으면 모두 Animal 타입
// name, color, breed가 있어야 Dog 타입

type Book = {
  // 슈퍼타입
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브타입
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; // 다운캐스팅 불가

/*
 * 초과 프로퍼티검사: 실제 객제 타입에 정의되지 않는 프로퍼티 차단
 */
// type Book = {
//     // 슈퍼타입
//     name: string;
//     price: number;
//   };

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // 초과 프로퍼티 발동, 프로퍼티가 없어서 불가능
};

// 객체리터럴 사용 X, 초과 프로퍼티 검사 우회
let book3: Book = programmingBook;

// 함수의 인수에서도 초과 프로퍼티 검사가 작동한다.
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // 초과 프로퍼티 발동, 프로퍼티가 없어서 불가능
});

// 함수의 인수에 서브타입 객체를 넣으려면, 변수에 저장해 변수로 인수 전달
func(programmingBook);
