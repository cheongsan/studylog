/*
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스 클래스를 구현
class Character implements CharacterInterface {
  // 필드
  //   name: string;
  //   moveSpeed: number;

  // 생성자
  // 인터페이스는 무조건 Public이다.
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
