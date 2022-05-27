import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./MainPage.scss";

function MainPage() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(true);
  const [text, setText] = useState("");
  const { isLogin, userId } = useContext(AuthContext);

  const createTodo = async () => {
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
        .then((response) => console.log("response", response));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (!isLogin) {
      return navigate("/signin");
    }
    setLoaded(false);
  }, [isLogin]);
  if (!loaded)
    return (
      <div className="container">
        <div className="main-page">
          <h3>MY TODO</h3>
          <form
            className="form form-login"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="input"
                  placeholder="TODO"
                  className="validate"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <button
                onClick={createTodo}
                className="wawes-effect wawes-light btn purple"
              >
                Add todo
              </button>
            </div>
          </form>
          <h3>Активные задачи</h3>
          <div className="todos">
            <div className="row flex todos-item">
              <div className="col todos-num">1</div>
              <div className="col todos-text">Text</div>
              <div className="col todos-buttons">
                <i class="material-icons blue-text">check</i>
                <i class="material-icons orange-text ">warning</i>
                <i class="material-icons red-text">delete</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainPage;
