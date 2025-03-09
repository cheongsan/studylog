/*
 * 클래스
 */
let studentA = {
    name: "양파쿵야",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};
// let studentB = {
//   name: "주먹밥쿵야",
//   grade: "B-",
//   age: 27,
//   study() {
//     console.log("열심히 공부 함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };
// 클래스의 이름은 대부분 파스칼 표기법을 사용함
class Student {
    // 필드: 객체가 만들어낼 프로퍼티를 정의
    name;
    grade;
    age;
    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // 메서드
    study() {
        console.log("열심히 공부 함");
    }
    introduce() {
        console.log(`안녕하세요! ${this.name} 입니다!`);
    }
}
// 인스턴스: 클래스를 이용해서 만든 객체
// Student 인스턴스
let studentB = new Student("주먹밥쿵야", "B-", 27);
studentB.study();
studentB.introduce();
// class StudentDeveloper {
//   // 필드
//   name;
//   grade;
//   age;
//   favoriteSkill;
//   // 생성자
//   constructor(name, grade, age, favoriteSkill) {
//     this.name = name;
//     this.grade = grade;
//     this.age = age;
//     this.favoriteSkill = favoriteSkill;
//   }
//   // 메서드
//   study() {
//     console.log("열심히 공부 함");
//   }
//   introduce() {
//     console.log(`안녕하세요! ${this.name} 입니다!`);
//   }
//   programming() {
//     console.log(`${this.favoriteSkill}로 프로그래밍 함`);
//   }
// }
// 클래스 확장(상속)
class StudentDeveloper extends Student {
    // 필드
    // name;
    // grade;
    // age;
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        // this.name = name;
        // this.grade = grade;
        // this.age = age;
        // 부모 클래스(super)의 생성자가 호출되어 설정됨
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    // 메서드
    //   study() {
    //     console.log("열심히 공부 함");
    //   }
    //   introduce() {
    //     console.log(`안녕하세요! ${this.name} 입니다!`);
    //   }
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
const studentDeveloper = new StudentDeveloper("양파쿵야", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
export {};
