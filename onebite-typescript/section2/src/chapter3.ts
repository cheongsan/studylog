// object
// 객체 리터럴 타입을 사용
// 구조적 타입 시스템(Property Based Type System): 객체의 구조를 기준으로 타입을 정의한다
// cf) 명목적 타입 시스템: 대부분의 언어가 사용, Object로 선언하면 객체가 됨
let user: {
  id?: number; // 선택적 프로퍼티, Optional
  name: string;
} = {
  id: 1,
  name: "양파쿵야",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "초코",
//   color: "brown",
// };

// 프로퍼티에 접근
user.id;

// ID를 모를 때
user = {
  name: "양파쿵야",
};

// 읽기 전용
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 오류
