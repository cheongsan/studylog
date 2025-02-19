// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// 타입 별칭의 스코프
// type User = {};
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "양파쿵야",
  nickname: "OnionKoongya",
  birth: "1999-04-05",
  bio: "안녕하세요",
  location: "Seoul",
};

let user2: User = {
  id: 2,
  name: "주먹밥쿵야",
  nickname: "BabKoongya",
  birth: "1999-04-05",
  bio: "안녕하세요",
  location: "Seoul",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let contryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type ContryNumberCodes = {
  [key: string]: number;
  Korea: number; // Korea는 반드시 있어야 한다고 지정
  //   Korea: string; // 인덱스 시그니처의 값과 일치하거나 호환되어야 한다
};

let ContryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};

// 규칙을 위반하지 않으면 오류가 발생하지 않음
// let ContryNumberCodes = { };
