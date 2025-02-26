/*
 * 접근 제어자(Access modifier)
 * 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 지정할 수 있다.
 * Public
 * Private: 클래스 내부에서만 접근 가능
 * Proteced: 파생 클래스까지 접근 가능
 */

class Employee {
  // 필드
  // 일반적으로 접근 제어자가 없으면 public이 기본값
  //   private name: string;
  //   protected age: number;
  //   public position: string;

  // 생성자
  // 접근 제어자는 생성자의 매개변수 앞에도 사용할 수 있다.
  // 생성자에 접근 제어자를 사용하면 타입스크립트에서 자동으로 필드를 생성하고 초기화를 진행한다 -> 식별자가 중복됨
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    // private -> 메서드 안에서만 접근할 수 있다.
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name // 오류: private는 파생 클래스에서도 접근할 수 없다.
    this.age; // protected는 접근 가능
  }
}

const employee = new Employee("양파쿵야", 27, "developer");
// employee.name = "주먹밥쿵야"; // 오류
// employee.age = 30; // 오류
employee.position = "디자이너";
console.log(employee);
