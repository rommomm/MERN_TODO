import React from "react";

import "./Todo.scss";

function Todo({ todos, completedTodo, importantTodo, removeTodo }) {
  return (
    <div>
      <h3>Actual todo</h3>
      <div className="todos">
        {todos.map((todo, index) => {
          let cls = ["row flex todos-item"];

          if (todo.completed) {
            cls.push("completed");
          }

          if (todo.important) {
            cls.push("important");
          }

          return (
            <div className={cls.join(" ")} key={index}>
              <div className="col todos-num">{index + 1}</div>
              <div className="col todos-text">{todo.text}</div>
              <div className="col todos-buttons">
                <i
                  class="material-icons blue-text"
                  onClick={() => completedTodo(todo._id)}
                >
                  check
                </i>
                <i
                  class="material-icons orange-text "
                  onClick={() => importantTodo(todo._id)}
                >
                  warning
                </i>
                <i
                  class="material-icons red-text"
                  onClick={() => removeTodo(todo._id)}
                >
                  delete
                </i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
