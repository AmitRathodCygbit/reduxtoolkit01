import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slicefile/TodoSlice";
function TodoSelector() {
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ flex: 1, display: "flex" }}>
        <ul
          style={{
            backgroundColor: "lightgrey",
            margin: "auto",
            padding: 20,
            marginTop: 20,
          }}
        >
          {todos.map((todo,index) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button
                style={{
                  marginLeft: 5,
                  backgroundColor: "skyblue",
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 5,
                  margin: 10,
                }}
                onClick={() => {
                  dispatch(removeTodo(todo.i));
                }}
              >
                REMOVE TODO
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoSelector;
