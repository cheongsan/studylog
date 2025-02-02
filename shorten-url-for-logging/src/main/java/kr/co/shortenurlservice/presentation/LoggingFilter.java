package kr.co.shortenurlservice.presentation;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Slf4j
@Component
public class LoggingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (request instanceof HttpServletRequest httpServletRequest) {
            // 요청을 CachedBodyHttpServletRequest로 래핑
            CachedBodyHttpServletRequest wrappedRequest = new CachedBodyHttpServletRequest(httpServletRequest);

            // URL, 매서드 및 요청 바디 로깅
            String url = wrappedRequest.getRequestURI();
            String method = wrappedRequest.getMethod();
            String body = wrappedRequest.getReader().lines().reduce("", String::concat);

            log.trace("Incoming Request: URL={}, Method={}, Body={}", url, method, body);

            // 래핑된 요청 객체를 다음 필터 체인으로 전달
            chain.doFilter(wrappedRequest, response);
        } else {
            // HttpServletRequest가 아닌 경우 그대로 전달
            chain.doFilter(request, response);
        }
    }
//
//    private String getRequestBody(HttpServletRequest request) {
//        try (BufferedReader reader = request.getReader()) {
//            return reader.lines().collect(Collectors.joining(System.lineSeparator()));
//        } catch (IOException e) {
//            log.error("Failed to read request body", e);
//            return "Unable to read request body";
//        }
//    }
}

// 결과: TRACE 34008 --- [nio-8080-exec-1] k.c.s.presentation.LoggingFilter         : Incoming Request: URL=/shortenUrl, Method=POST, Body={    "originalUrl": "https://www.inflearn.com/"}