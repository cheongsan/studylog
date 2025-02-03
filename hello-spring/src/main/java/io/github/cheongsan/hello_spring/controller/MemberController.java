package io.github.cheongsan.hello_spring.controller;

import io.github.cheongsan.hello_spring.domain.Member;
import io.github.cheongsan.hello_spring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {

    // 멤버 컨트롤러를 다른 곳(eg 주문 컨트롤러)에서도 가져다 쓸 수 있다.
    // 그런데 멤버 서비스에서는 기능이 없다. 여러개의 객체를 new 생성할 필요가 없는 것이다.
    // private final MemberService memberService = new MemberService();

    // 이럴 때는 스프링 컨테이너에 등록하고 사용하면 되는 것이다. 딱 하나만 등록되고 부가적인 효과를 볼 수 있다.
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/members/new")
    public String createForm() {
        return "members/createMemberForm";
    }

    @PostMapping("/members/new")
    public String create(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());

        System.out.println("member = " + member);

        memberService.join(member);

        return "redirect:/";
    }

}
