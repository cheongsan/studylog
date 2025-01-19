package io.github.cheongsan.hello_spring.service;

import io.github.cheongsan.hello_spring.domain.Member;
import io.github.cheongsan.hello_spring.repository.MemoryMemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

class MemberServiceTest {

//    MemberService memberService = new MemberService();
    // 테스트에서 사용하는 객체는 new 다른 객체이기 때문에 내용이 달라질 수 있다.
    // Memberservice, Memberprository가 같은 인스턴스를 사용하도록 하기
//    MemoryMemberRepository memberRepository = new MemoryMemberRepository();
    MemberService memberService;
    MemoryMemberRepository memberRepository;

    @BeforeEach
    public void beforeEach(){
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }


    @AfterEach
    public void afterEach() {
        memberRepository.clearStore();
    }

    @Test
    void 회원가입() {
        // given
        Member member = new Member();
        member.setName("spring");

        // when
        long saveId = memberService.join(member);

        // then
        // 우리가 저장한게 리포지토리에 있는거 맞나?
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }

    @Test
    public void 중복_회원_예외(){
        //given
        Member member1 = new Member();
        member1.setName("spring");

        Member member2 = new Member();
        member2.setName("spring");

        //when
        memberService.join(member1);
//        try {
//            memberService.join(member2);
//            fail("예외가 발생해야 합니다.");
//        } catch (IllegalStateException e) {
//            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
//            // assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.111");
//        }
//        assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        // assertThrows(NullPointerException.class, () -> memberService.join(member2));

        // 메시지는 어떻게 검증하나요
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
    }

    @Test
    void findMembers() {
    }

    @Test
    void findOne(){

    }
}