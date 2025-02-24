/*
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 기준
 * 1. 반환 값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 3. 매개변수의 개수가 같은가
 */

// 기준 1. 반환 값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

// 반환값 끼리 업캐스팅이 되면 호환
// number 리터럴 타입 10 -> number: 업캐스팅 허용
a = b;

// 반환값 끼리 다운캐스팅이 되면 오류 발생
// number -> number 리터럴 타입 10: 다운캐스팅 불가
// b = a; // 오류

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수의 타입으로 호환성을 판단할 때는 업캐스팅일때는 호환 안됨
// number 리터럴 타입 10 -> number: 업캐스팅
// c = d; // 오류

// 매개변수의 타입으로 호환성을 판단할 때는 다운캐스팅일 때 호환
// number -> number 리터럴 타입 10: 다운캐스팅
d = c;

// Animal 타입이 Dog 타입의 슈퍼 타입일 때
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// dogFunc -> anmialFunc: 업캐스팅
// animalFunc = dogFunc; // 오류

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(aniaml.color);  // 업캐스팅, 없음
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name); // 다운캐스팅, 있음
};

// 2-1. 매개변수의 개수가 다를 때
// 적어도 타입이 같은 매개변수가 있어야 한다.
// 할당하려는 곳이 매개변수의 개수가 더 작을 때만 호환
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

// Func2 타입 (1개) -> Func1 타입 (2개) : OK
func1 = func2;

// Func1 타입(1개) -> Func2 타입(2개) : X
// func2 = func1; // 오류
