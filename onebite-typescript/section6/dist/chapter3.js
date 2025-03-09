/*
 * 인터페이스와 클래스
 */
// 인터페이스 클래스를 구현
class Character {
    name;
    moveSpeed;
    extra;
    // 필드
    //   name: string;
    //   moveSpeed: number;
    // 생성자
    // 인터페이스는 무조건 Public이다.
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    // 메서드
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
export {};
