/*
 * 서로소 유니온 타입 -tagged union type
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */
// string | number => 서로소 유니온 타입
// 스트링 리터럴 타입(tag)를 추가함 -> 교집합 관계가 발생할 수 없음: never -> 서로소 유니온 타입
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user) {
    //   if ("kickCount" in user) {
    //   if (user.tag === "ADMIN") {
    //     // admin 타입
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    //     //   } else if ("point" in user) {
    //   } else if (user.tag === "MEMBER") {
    //     // member 타입
    //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    //   } else {
    //     // guest 타입
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    //   }
    //직관적으로 타입을 좁힐 수 있다.
    switch (user.tag) {
        case "ADMIN":
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        case "MEMBER":
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        case "GUEST":
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
    }
}
// 로딩 중 -> 콘솔에 로딩 중 출력
// 실패 -> 실패: 에러메시지를 출력
// 성공 -> 성공: 데이터를 출력
function processResult(task) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중");
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
export {};
