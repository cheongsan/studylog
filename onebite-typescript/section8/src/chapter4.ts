/**
 * 템플릿 리터럴 타입
 * 스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "back-dog"; //...
type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "black-dog";
