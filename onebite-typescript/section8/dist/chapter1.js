/**
 * 인덱스드 엑세스 타입
 * 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 * 복잡하고 큰 타입에서 필요한 부분만 추출하여 사용할 수 있다
 */
// function printAuthorInfo(author: { id: number; name: string }) {
// Post타입의 author 프로퍼티만 가져올 수 있다
// 새로운 프로퍼티가 추가 변경되었을 때 즉시 반영된다.
// 스트링 리터럴(author)를 인덱스라고 부른다. -> 값이 아니라 타입만 명시할 수 있다.
// const key = "author"
// function printAuthorInfo(author: Post[key]}) { // 오류
// author 프로퍼티의 id 값만 가져오고 싶을 때:
// function printAuthorInfo(author: Post["author"]["id"]) {
function printAuthorInfo(author) {
    console.log(`${author.name}-${author.id}`);
}
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "양파쿵야",
        age: 27,
    },
};
printAuthorInfo(post.author);
function printAuthorInfo2(author) {
    console.log(`${author.name}-${author.id}`);
}
// number타입 말고 배열 인덱스에 어떤 숫자를 넣어도 배열 타입이면 요소를 잘 추출해온다
// PostList[0]
const post2 = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "양파쿵야",
        age: 27,
    },
};
printAuthorInfo(post.author);
export {};
