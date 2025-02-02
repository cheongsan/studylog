package kr.co.shortenurlservice.presentation;

import kr.co.shortenurlservice.domain.LackOfShortenUrlKeyException;
import kr.co.shortenurlservice.domain.NotFoundShortenUrlException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(LackOfShortenUrlKeyException.class)
    public ResponseEntity<String> handleLackOfShortenUrlKeyException(
            LackOfShortenUrlKeyException ex
    ) {
        // FETAL 레벨의 로그를 기록하는 것보단 개발자에게 알림을 전송하는 부분을 추가하는 것이 좋다.
        log.error("단축 URL 자원이 부족합니다.");
        return new ResponseEntity<>("단축 URL 자원이 부족합니다.", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // NotFoundShortenUrlException에 대한 예외 핸들러
    @ExceptionHandler(NotFoundShortenUrlException.class)
    public ResponseEntity<String> handleNotFoundShortenUrlException(
            NotFoundShortenUrlException ex
    ) {
        // log.info("단축 URL을 찾지 못했습니다.");
        log.info(ex.getMessage());
        //결과: 2025-02-02T20:17:13.629+09:00  INFO 40392 --- [nio-8080-exec-1] k.c.s.p.GlobalExceptionHandler           : 단축 URL을 찾지 못했습니다. shortenUrlKey=63xmFS3B

        //log.error(ex.getMessage());
        //사용자는 ShortenUrlKey로 아무런 값이나 요청할 수 있고, 이러한 요청이 개발자의 개입이 필요한 상황은 아니다.
        //INFO 레벨, 또는 WARN 레벨로 지정하는게 바람직하다.

        //ERROR는 개발자의 개입이 필요한 상황
        //예외가 발생했을 때 무조건 ERROR 레벨로 기록하는 것은 아니다.
        //ShortenUrlKey가 절대로 잘 못된 값을 요청할 수 없는 경우에 ERROR 레벨로 지정하는 것이 적절하다.

        // NOT_FOUND: 404 에러
        return new ResponseEntity<>("단축 URL을 찾지 못했습니다.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException ex
    ) {
        // 유효성 검증 오류 세부 정보 추출
        StringBuilder errorMessage = new StringBuilder("유효성 검증 실패: ");
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            errorMessage.append(String.format("필드 '%s': %s. ", error.getField(), error.getDefaultMessage()));
        });

        // 상세 로그
        log.debug("잘못된 요청: {}", errorMessage);

        // 클라이언트에 응답
        return new ResponseEntity<>(errorMessage.toString(), HttpStatus.BAD_REQUEST);
    }

}
