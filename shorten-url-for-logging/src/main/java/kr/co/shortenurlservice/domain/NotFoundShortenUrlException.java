package kr.co.shortenurlservice.domain;

// Unchecked Exception
public class NotFoundShortenUrlException extends RuntimeException {
    // 에러 메시지를 추가하기 위해서는 메시지 생성자를 호출하도록 하면 된다.
    // 기본 생성자
//    public NotFoundShortenUrlException(){
//        super();
//    }

    // 메시지를 전달받는 생성자
    public NotFoundShortenUrlException(String message) {
        super(message);
    }
}

// Chcked Exception
//public class NotFoundShortenUrlException extends Exception {
//}
// 컴파일 시점에 예외 처리를 강제하기 때문에 문제가 발생한다.
// throws로 메소드 밖으로 던지거나, try catch 문으로 감싸주어야 한다.