// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "koongya"];
// 제너릭 문법
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우 (유니언 타입)
let multiArr = [1, "hello", true];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플(타입스크립트에서만 지원)
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; // 오류
// tup1 = ["1", "2"]; // 오류
let tup2 = [1, "2", true];
export {};
// tup2 = [ "2", 1, true]; // 오류
// tup2 = [ "2", 1]; // 오류
