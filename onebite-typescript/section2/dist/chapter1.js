// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1 = "hello"; // 오류
// num1.toUpperCase(); // 오류
num1.toFixed();
// string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1 = 123; // 오류
// str1.toFixed(); // 오류
str1.toUpperCase();
// boolearn
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// let numA: number = null; // 기본적으로 Null 타입만 null 값 할당 가능, "strictNullChecks": false
// 리터럴 타입
// 리터럴 -> 값
let numA = 10;
// numA = 12; // 오류
let strA = "hello";
// let strA: "hello" = "hello2"; // 오류
let boolA = true;
export {};
// let boolA: true = false; // 오류
