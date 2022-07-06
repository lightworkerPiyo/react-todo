import React, { useState, useEffect } from "react";

import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompletedTodos } from "./components/IncompleteTodos";
import { CompletedTodos, completedTodos } from "./components/CompleteTodos";

export const App = () => {
  // useState
  const [todoText, setTodoText] = useState("");

  const [incompletedTodos, setIncompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(["ううううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompletedTodos, todoText];
    setIncompletedTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompletedTodos];
    newTodos.splice(index, 1);
    setIncompletedTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteToDos = [...incompletedTodos];
    newIncompleteToDos.splice(index, 1);

    const newCompleteTodos = [...completedTodos, incompletedTodos[index]];
    setIncompletedTodos(newIncompleteToDos);
    setCompletedTodos(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completedTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteToDos = [...incompletedTodos, completedTodos[index]];
    setCompletedTodos(newCompleteTodos);
    setIncompletedTodos(newIncompleteToDos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompletedTodos.length >= 5}
      />
      {incompletedTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるのは5個まで！！ちゃんとやりましょう
        </p>
      )}
      <IncompletedTodos
        todos={incompletedTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodos todos={completedTodos} onClickReturn={onClickReturn} />
      <div className="completed-area">
        <p className="title">完了</p>
        <ul>
          {completedTodos.map((done, index) => {
            return (
              <div key={done} className="list-row">
                <li>{done}</li>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
