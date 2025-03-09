/*
 * map 메서드
 */
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]
// map 메서드 타입 정의
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (it) => it * 2);
// T = string[]
// parseInt -> U에 들어와서 number 타입 추론
map(["hi", "hello"], (it) => parseInt(it));
/*
 * forEach
 */
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (it) => {
    console.log(it.toFixed());
});
forEach(["123", "456"], (it) => {
    it;
});
export {};
