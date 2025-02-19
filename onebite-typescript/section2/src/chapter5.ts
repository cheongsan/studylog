// enum (열거형) 타입
// 타입스크립트에서만 있음, 컴파일 시 enum은 사라지지 않고 자바스크립트의 객체로 변환된다.
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 Enum
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// 자동 할당
// enum Role {
//     ADMIN, // <-- 0
//     USER, // <-- 1
//     GUEST, // <-- 2
//   }

//   enum Role {
//     ADMIN = 10, // <-- 10
//     USER, // <-- 11
//     GUEST, // <-- 12
//   }

//   enum Role {
//     ADMIN, // <-- 9
//     USER = 10, // <-- 10
//     GUEST, // <-- 11
//   }

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
}

const user1 = {
  name: "양파쿵야",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.KOREAN,
};

const user2 = {
  name: "주먹밥쿵야",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.ENGLISH,
};

const user3 = {
  name: "샐러리쿵야",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
