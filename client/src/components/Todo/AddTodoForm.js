import React from "react";

function AddTodoForm({ createTodo, setText, text }) {
  return (
    <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            name="input"
            placeholder="TODO"
            className="validate"
            value={text}
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
  );
}

export default AddTodoForm;
