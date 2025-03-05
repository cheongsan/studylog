/**
 * 조건부 타입
 */
let varA;
let varB;
// 구현 시그니처 안에서 조건부 타입을 추론할 수 있게 된다.
function removeSpace(text) {
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    }
}
// let result = removeSpace("hi im onion.koongya") as string;
let result = removeSpace("hi im onion.koongya");
result.toUpperCase();
let result2 = removeSpace(undefined);
export {};
