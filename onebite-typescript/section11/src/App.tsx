import { useEffect, useReducer, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

// 타입스크립트는 액션을 서로소 유니온 타입으로 정의하므로 실수를 방지할 수 있다.
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
