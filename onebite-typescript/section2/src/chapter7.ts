// void
// void -> 공허 -> 아무것도 없다
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// 변수에 void 타입을 지정하면 오직 undefined만 담을 수 있다.
// strictNullChecks를 false로 지정하면 void 타입도 값을 받을 수 있다.
let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;

// void타입을 사용하는 이유
// function func2(): undefined {
//   //함수가 반드시 undefined를 반환해야한다
//   console.log("hello");
//   return;
// }

// function func2(): null {
//   console.log("hello");
//   return null;
}

// return 문을 쓰지 않고자 할 때 void 타입을 사용한다.

// never
// never -> 존재하지 않는, 절대 발생하지 않는 값
// 불가능한 타입

// 무한루프를 도는 함수
// 정상적으로 종료되는 것 자체가 모순됨
function func3(): never {
  while (true) {}
}

// 실행되면 바로 프로그램이 정지되므로 never이 적합함
function func4(): never {
    throw new Error();
}

// 변수에 never 타입을 지정하면 아무 것도 담을 수 없다.
// strictNullChecks를 false로 지정해도 아무것도 담을 수 없다.
let b: never;
// b = 1;
// b = "hello";
// b = {};
// b = undefined;
// b = null;

let anyVar: any;
// b=anyVar; // 오류 