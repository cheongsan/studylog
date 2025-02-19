// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "hello"; // 오류
// num1.toUpperCase(); // 오류
num1.toFixed();

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str1 = 123; // 오류
// str1.toFixed(); // 오류
str1.toUpperCase();

// boolearn
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null; // 기본적으로 Null 타입만 null 값 할당 가능, "strictNullChecks": false

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
// numA = 12; // 오류

let strA: "hello" = "hello";
// let strA: "hello" = "hello2"; // 오류

let boolA: true = true;
// let boolA: true = false; // 오류
