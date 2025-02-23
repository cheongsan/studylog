/*
 * Unknown 타입
 */

function UnknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅 불가
  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/*
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅 불가
  // 어떤 값도 저장이 불가능하게 만들때 좋음
  // let never1: never = 10; // number --> nver
  // let never2: never = "string";
  // let never3: never = true;
}

/*
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // undefined 업캐스팅하여 반환 가능
  }

  // void 타입은 undefined 타입의 슈퍼 타입이다
  // 업캐스팅
  let voidVar: void = undefined;
}

/*
 * Any 타입
 */
// Any 타입은 모든 타입의 슈퍼 타입이기도 하고, 모든 타입의 서브 타입이기도 한다
// 타입계층도를 완전히 무시하므로 가능하면 사용하지 않는 것이 좋음
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // Unkwown -> Any 타입으로 다운캐스팅 허용
  anyVar = unknownVar;

  // Any -> Undefined 타입으로 다운캐스팅 허용
  undefinedVar = anyVar;

  // naver타입은 정말 순수한 공집합이므로 어떤 타입도 다운캐스팅할 수 없다.
  // neverVar = anyVar;
}
