/**
 * 제네릭 클래스
 */
// class NumberList {
//     // 생성자
//     constructor(private list: number[]){}
//     // 메서드
//     push(data: number){
//         this.list.push(data)
//     }
//     pop(){
//         return this.list.pop();
//     }
//     print(){
//         console.log(this.list);
//     }
// }
// number[] -> T도 number로 추론
class List {
    list;
    // 생성자
    constructor(list) {
        this.list = list;
    }
    // 메서드
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
// T = string으로 추론
const stringList = new List(["1", "2"]);
stringList.push("hello");
export {};
