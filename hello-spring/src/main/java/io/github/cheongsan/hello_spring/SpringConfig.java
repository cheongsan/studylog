package io.github.cheongsan.hello_spring;

import io.github.cheongsan.hello_spring.repository.MemberRepository;
import io.github.cheongsan.hello_spring.repository.MemoryMemberRepository;
import io.github.cheongsan.hello_spring.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    @Bean
    public MemberService memberService() {
        return new MemberService((MemoryMemberRepository) memberRepository());
    }
    @Bean
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }
}
