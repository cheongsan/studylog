/**
 * 제네릭 인터페이스
 */
// 제너릭 인터페이스는 제너릭 함수와 달리 타입으로 정의할 때 
// 반드시 타입 변수(타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터)의 타입을 할당해야한다. 
let keyPair = {
    key: "key",
    value: 0,
};
// 하나의 제네릭 인터페이스로 다양한 타입의 객체를 표현할 수 있다.
let keyPair2 = {
    key: true,
    value: ["1"],
};
// 프로퍼티의 key의 타입이 string 타입, vaule 타입이 number이면 허용
let numberMap1 = {
    key: -1231,
};
// vaule의 타입을 원하는 타입으로 사용할 수 있음
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
// 제네릭 인터페이스와 같이 타입 별칭도 타입 변수의 타입을 직접 지정해야한다.
let stringMap2 = {
    key: "hello",
};
// 제네릭 인터페이스 사용
function goToSchool(user) {
    // 타입 좁히기
    // if(user.profile.type !== 'student'){
    //     console.log("잘 못 오셨습니다");
    //     return;
    // }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
// goToSchool(developerUser); 오류
const developerUser = {
    name: "양파쿵야",
    profile: {
        type: "developer",
        skill: "TypeScript",
    }
};
const studentUser = {
    name: "주먹밥쿵야",
    profile: {
        type: "student",
        school: "야채대학교"
    }
};
export {};
