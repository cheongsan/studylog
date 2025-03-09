/**
 * Mapped(맵드)타입
 * 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 선택적으로 원하는 값만 보내기
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 중복되는 인터페이스, -> mapped 타입으로 해결하기
// mapped 타입은 인터페이스로는 사용할 수 없다 -> 타입 별칭으로만 사용 가능
type PartialUser = {
  //      Key                       Value
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  //... 기능
  return {
    id: 1,
    name: "양파쿵야",
    age: 27,
  };
}

const user = fetchUser();
// user.id = 1; // 오류

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  //... 수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "양파쿵야",
  age: 25,
});
