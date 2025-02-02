package kr.co.shortenurlservice.domain;

import lombok.ToString;

import java.util.Random;

@ToString
//AS-IS: INFO 31588 --- [nio-8080-exec-4] k.c.s.a.SimpleShortenUrlService          : shortenUrl 생성: kr.co.shortenurlservice.domain.ShortenUrl@2f2a640e
//TO-BE: INFO 35976 --- [nio-8080-exec-1] k.c.s.a.SimpleShortenUrlService          : shortenUrl 생성: ShortenUrl(originalUrl=https://www.inflearn.com/, shortenUrlKey=rHG9dt57, redirectCount=0)
public class ShortenUrl {
    private String originalUrl;
    private String shortenUrlKey;
    private Long redirectCount;

    public ShortenUrl(String originalUrl, String shortenUrlKey) {
        this.originalUrl = originalUrl;
        this.shortenUrlKey = shortenUrlKey;
        this.redirectCount = 0L;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public String getShortenUrlKey() {
        return shortenUrlKey;
    }

    public Long getRedirectCount() {
        return redirectCount;
    }

    public void increaseRedirectCount() {
        this.redirectCount = this.redirectCount + 1;
    }

    public static String generateShortenUrlKey() {
        String base56Characters = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
        Random random = new Random();
        StringBuilder shortenUrlKey = new StringBuilder();

        for(int count = 0; count < 8; count++) {
            int base56CharactersIndex = random.nextInt(0, base56Characters.length());
            char base56Character = base56Characters.charAt(base56CharactersIndex);

            shortenUrlKey.append(base56Character);
        }

        return shortenUrlKey.toString();
    }
}
