/**
 * 프로미스(Promise)
 * 비동기 처리를 돕는 프로미스 객체의 타입을 정의하는 방법
 */

// 실행자 함수: 비동기 처리를 하는 함수
// resolve(결과값): 비동기 작업이 성공했을 때 전달하는 함수
// reject(실패이유): 비동기 작업이 실패했을 대 전달하는 함수 
const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(() => {
        // resolve(20);
        reject("실패") // any타입
    }, 3000);
});

// 결과값을 이용하는 함수
promise.then((response) => {
    console.log(response * 10); // 20 
    // promise는 resolve, reject 비동기 작업으로 반환되는 값의 타입을 unknown으로 추론함
    // response가 unknown으로 추론되어 오류가 발생함
    // => 제네릭 사용
    // 자바스크립트의 내장 클래스인 promise는 타입스크립트에서 promise는 제네릭 클래스로 타입이 별도로 선언되어 있음
    // 비동기타입의 결과값을 정의해 줄 수 있지만, 실패 했을 때 타입은 정의할 수 없다.
    // 타입 변수 정의를 생략하면 기본적으로 unkwon 타입으로 추론된다.
})

// primise의 catch 메서드로는 다 any 타입이 들어온다.
promise.catch((err)=>{
    // err 매개변수를 사용할 때는 타입 좁히기를 사용한다.
    if(typeof err === "string") {
        console.log(err);
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() : Promise<Post> {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000)
    })
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id
})