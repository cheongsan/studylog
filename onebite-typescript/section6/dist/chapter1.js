/*
 * 타입스크립트의 클래스
 */
// 클래스를 생성하기 전 객체로 먼저 표현하면 좋다
const employee = {
    name: "양파쿵야",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    // 필드
    // 추론할 수 있는 정보가 없을 때 암시적으로 'any' 타입이 포함된다
    name;
    age;
    position;
    // 이니셜라지저가 없고 생성자에 할당되어 있지 않음 -> Undefined
    // -> 선택적 필드 / 초기값 할당 / 생성자 생성
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
// 인스턴스
const employeeB = new Employee("양파쿵야", 27, "개발자");
console.log(employeeB);
// 타입스크립트의 클래스는 자바스크립트 클래스로 취급되면서 동시에 타입으로도 취급된다.
// 타입스크립트는 구조적 타입 체계를 사용하기 때문.
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
// 클래스 확장(상속)
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        // 타입스크립트에서 파생 클래스의 생성자는 super 호출을 반드시 포함해야 한다.
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
export {};
