import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {
  // onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  // userState 함수에 초기값으로 타입을 추론해준다, 제네릭 함수
  // 초기값이 없으면 undefined, 초기값으로 무엇이라도 전달하는게 좋다
  const [text, setText] = useState("");

  // 미리 정의된 타입을 가져와야한다. 리액트에서 이미 정의된 타입
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
