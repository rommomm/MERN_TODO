import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AddTodoForm from "../../components/Todo/AddTodoForm";
import Todo from "../../components/Todo/Todo";
import { AuthContext } from "../../context/AuthContext";

function MainPage() {
  const [text, setText] = useState("");
  const { isLogin, userId } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    try {
      await axios
        .get("/api/todo", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          params: { userId },
        })
        .then((response) => setTodos(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };

  const createTodo = async () => {
    if (!text) return null;
    try {
      await axios
        .post(
          "/api/todo/add",
          { text, userId },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setTodos([...todos], response.data);
          setText("");
          getTodo();
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete(
        `/api/todo/delete/${id}`,
        { id },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      getTodo();
    } catch (error) {
      console.log("error", error);
    }
  };

  const completedTodo = async (id) => {
    try {
      await axios
        .put(
          `/api/todo/completed/${id}`,
          { id },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setTodos([...todos], response.data);
          getTodo();
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const importantTodo = async (id) => {
    try {
      await axios
        .put(
          `/api/todo/important/${id}`,
          { id },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setTodos([...todos], response.data);
          getTodo();
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTodo();
  }, [todos]);

  if (!todos) {
    return null;
  }
  return (
    <div className="container">
      <div className="main-page">
        {isLogin ? (
          <div>
            <h3>MY TODO</h3>
            <AddTodoForm
              createTodo={createTodo}
              setText={setText}
              text={text}
            />
            <Todo
              todos={todos}
              completedTodo={completedTodo}
              importantTodo={importantTodo}
              removeTodo={removeTodo}
            />
          </div>
        ) : (
          <h3>Log in to create a todo</h3>
        )}
      </div>
    </div>
  );
}

export default MainPage;
