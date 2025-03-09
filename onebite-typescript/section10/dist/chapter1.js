/**
 * Partial<T>
 * 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
const draft = {
    title: "제목 나중에 짓자",
    content: "초안",
};
const withThumnailPost = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://cheongsan.do/onebite-typescript",
};
const readonlyPost = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
};
export {};
// readonlyPost.content = "";
