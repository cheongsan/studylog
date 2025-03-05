/**
 * Mapped(맵드)타입
 * 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
 */
// 한명의 유저 정보를 불러오는 기능
function fetchUser() {
    //... 기능
    return {
        id: 1,
        name: "양파쿵야",
        age: 27,
    };
}
const user = fetchUser();
// user.id = 1; // 오류
// 한명의 유저 정보를 수정하는 기능
function updateUser(user) {
    //... 수정하는 기능
}
updateUser({
    //   id: 1,
    //   name: "양파쿵야",
    age: 25,
});
export {};
