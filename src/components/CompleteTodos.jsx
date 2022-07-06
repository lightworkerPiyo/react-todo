import React from "react";

export const CompletedTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <div className="completed-area">
      <p className="title">完了</p>
      <ul>
        {todos.map((done, index) => {
          return (
            <div key={done} className="list-row">
              <li>{done}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
