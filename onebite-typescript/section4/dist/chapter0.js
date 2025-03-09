/*
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// JS: 어떤 매개변수를 받고, 어떤 연산을 거처, 어떤 결과값을 반환하는지 이야기 하는 것.
// TS: 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 하는 것.
// return값을 기준하여 반환 값을 추론 -> number
function func(a, b) {
    return a + b;
}
/*
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => a + b;
/*
 * 함수의 매개변수
 */
// 매개변수의 기본값을 기준으로 타입을 추론 -> string
// function introduce(name: number = "양파쿵야") { // 오류
// ?: 선택적 매개변수, number | undefined 유니온 타입
// 선택적 매개변수는 필수 매개변수 뒤에 위치해야 한다.
function introduce(name = "양파쿵야", age, tall) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall: ${tall + 10}`); // 타입 가드로 불안전한 연산 오류 해결
    }
}
// introduce(1); // 오류
introduce("양파쿵야", 1000);
introduce("양파쿵야", 27);
// ...rest 파라미터: JavaScript 문법: 가변적인 길이의 인수를 전달하면 배열로 묶어 Rest 변수에 담는 문법
// 매개변수의 길이 고정 -> 튜플 타입 사용: function getSum(...rest: [number, number, number])
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it)); // 배열 매서드 사용
    return sum;
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 60
export {};
