/*
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 기준
 * 1. 반환 값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 3. 매개변수의 개수가 같은가
 */
let a = () => 10; // number 타입
let b = () => 10; // number 리터럴 타입
// 반환값 끼리 업캐스팅이 되면 호환
// number 리터럴 타입 10 -> number: 업캐스팅 허용
a = b;
let c = (value) => { };
let d = (value) => { };
// 매개변수의 타입으로 호환성을 판단할 때는 업캐스팅일때는 호환 안됨
// number 리터럴 타입 10 -> number: 업캐스팅
// c = d; // 오류
// 매개변수의 타입으로 호환성을 판단할 때는 다운캐스팅일 때 호환
// number -> number 리터럴 타입 10: 다운캐스팅
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// dogFunc -> anmialFunc: 업캐스팅
// animalFunc = dogFunc; // 오류
let testFunc = (animal) => {
    console.log(animal.name);
    // console.log(aniaml.color);  // 업캐스팅, 없음
};
let testFunc2 = (dog) => {
    console.log(dog.name); // 다운캐스팅, 있음
};
let func1 = (a, b) => { };
let func2 = (a) => { };
// Func2 타입 (1개) -> Func1 타입 (2개) : OK
func1 = func2;
export {};
// Func1 타입(1개) -> Func2 타입(2개) : X
// func2 = func1; // 오류
