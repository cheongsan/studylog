/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}

// 제너릭 인터페이스는 제너릭 함수와 달리 타입으로 정의할 때 
// 반드시 타입 변수(타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터)의 타입을 할당해야한다. 
let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 0,
}

// 하나의 제네릭 인터페이스로 다양한 타입의 객체를 표현할 수 있다.
let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
}

/**
* 객체의 인덱스 시그니처
* 프로퍼티의 규칙만 맞으면 어떤 객체든 허용하는 유연한 객체 타입을 정의할 수 있음
*/
interface NumberMap {
    [key: string]: number;
}

// 프로퍼티의 key의 타입이 string 타입, vaule 타입이 number이면 허용
let numberMap1: NumberMap = {
    key: -1231,
}

// 제네릭 인터페이스와 인덱스 시그니처를 같이 사용하면 좀 더 유연한 타입을 정의할 수 있다
interface Map<V> {
    [key: string]: V;
}

// vaule의 타입을 원하는 타입으로 사용할 수 있음
let stringMap: Map<string> = {
    key: "value",
}

let booleanMap: Map<boolean> = {
    key: true,
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
}

// 제네릭 인터페이스와 같이 타입 별칭도 타입 변수의 타입을 직접 지정해야한다.
let stringMap2: Map2<string> = {
    key: "hello",
}

/**
 * 제네릭 인터페이스의 활용 예시
 * 유저 관리 프로그램
 * 유저 구분: 학생 유저와 개발자 유저로 구분
 */


// 서로소 유니온
interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    // profile: Student | Developer;
    profile: T;
}

// 제네릭 인터페이스 사용
function goToSchool(user: User<Student>){
    // 타입 좁히기
    // if(user.profile.type !== 'student'){
    //     console.log("잘 못 오셨습니다");
    //     return;
    // }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); 오류

const developerUser: User<Developer> = {
    name: "양파쿵야",
    profile: {
        type: "developer",
        skill: "TypeScript",
    }
};

const studentUser: User<Student> = {
    name: "주먹밥쿵야",
    profile: {
        type: "student",
        school: "야채대학교"
    }
}