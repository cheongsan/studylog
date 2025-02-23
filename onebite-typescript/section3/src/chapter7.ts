/*
* 타입 좁히기
조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
*/

// value => number : toFixed
// value =? string : toUpperCase
function func(value: number | string) {
  // Union 타입 추론: number | string
  value;
  // value.toUpperCase(); // 오류
  // value.toFixed() // 오류
  // typeof로 타입을 지정하면 타입스크립트는 추론 범위를 좁힌다
  // typeof -> 타입 가드
  if (typeof value === "number") {
    // number 타입 추론
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    //string 타입 추론
    console.log(value.toUpperCase());
  }
}

type Person = {
  name: string;
  age: number;
};

function func1(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // number 타입 추론
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    //string 타입 추론
    console.log(value.toUpperCase());
    //   } else if (typeof value === "object") {
    //     // console.log(value.getTime()); // 오류: Javascript는 null 값도 똑같이 object로 통과, Date 객체라고 추론할 수 없음: Date | null
    //   }
    // 타입 가드: value가 Date 클래스의 인스턴스인지 확인
  } else if (value instanceof Date) {
    console.log(value.getTime());
    //   }else if (value instanceof Person) { // Person은 객체 타입이다, 인스턴스가 아님
    // vlaue가 null이 아니고 age가 value에 있음-> Person 타입으로 좁히기
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
