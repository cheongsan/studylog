/*
 * 타입 추론
 */
// 타입 넓히기: 좀 더 범용적으로 사용가능한 타입으로 추론한다
// 타입추론이 항상 잘 작동하는 것은 아니다
// 매개변수가 있는 경우 타입 선언 필요
// function func(param){

// }

// let a:number = 10;
let a = 10;
let b = "hello";
// 변수의 초기값을 기준으로 타입을 추론한다.
let c = {
  id: 1,
  name: "양파쿵야",
  profile: {
    nickname: "OnionKoongya",
  },
  urls: ["https://cheongsan.do"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// 함수의 반환값을 기준으로 추론한다.
// 매개변수의 기본값을 기준으로 추론한다.
function func(message = "hello") {
  return "hello";
}

// Any 타입의 진화
// 아무런 정보가 없을 땐 암묵적인 Any 타입으로 추론됨
let d;

// Ant -> Nunmber타입으로 진화: number 타입으로 추론됨
d = 10;
d.toFixed();
// d.toUpperCase(); // 오류

// Number -> String 타입으로 진화: string 타입으로 추론됨
d = "hello";
// d.toFixed(); // 오류
d.toUpperCase();

// 중간에 타입이 잘 못 진화될 수 있으므로 암묵적인 any 타입을 사용하는 것을 추천하지 않음

// 리터럴 타입 추론
const num = 10;
const str = "hello";

// Union 타입 추론
let arr = [1, "sring"];
