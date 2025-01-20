package io.github.cheongsan.hello_spring.service;

import io.github.cheongsan.hello_spring.domain.Member;
import io.github.cheongsan.hello_spring.repository.MemberRepository;
import io.github.cheongsan.hello_spring.repository.MemoryMemberRepository;

import java.util.List;
import java.util.Optional;

public class MemberService {

    //private final MemberRepository memberRepository = new MemoryMemberRepository();
    // 외부에서 넣어주도록 변경하기
    private final MemberRepository memberRepository;
    public MemberService(MemoryMemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }


    /**
     * 회원 가입
     */
    public Long join(Member member){
        // 같은 이름이 있는 중복 회원은 가입 불가
        // Optional<Member> result = memberRepository.findByName(member.getName());
        // // result.orElseGet(); // 값이 있으면 꺼내오고 없으면(Null) 어떤 행동을 실행함
//        result.ifPresent(m -> {
//            throw new IllegalStateException("이미 존재하는 회원입니다.");
//        });
        // Optional인 경우 Return을 Optional 객체로 해서 바로 사용할 수 있다.
//        memberRepository.findByName(member.getName())
//                .ifPresent(m -> {
//                    throw new IllegalStateException("이미 존재하는 회원입니다.");
//                });
        // FindbyName으로 로직이 나오는 경우 매소드로 뽑는 것이 좋다.
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();

    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers() {
         return memberRepository.findAll();
    }

    public Optional<Member> findOne(Long memberId){
        return memberRepository.findById(memberId);
    }
}
