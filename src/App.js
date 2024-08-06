import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoSlice,
  removeTodoSlice,
  updateTodoSlice,
} from "./redux/TodoSlice";

const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todo);

  const submitNow = () => {
    const date = prompt("enter date");
    if (text) {
      dispatch(addTodoSlice({ text, date }));
      setText(""); // Clear the input after submission
    }
  };

  const deleteButton = (id) => {
    dispatch(removeTodoSlice(id));
  };

  const updateButton = (id) => {
    const updatedText = prompt("Enter Updated Text");
    if (updatedText) {
      dispatch(updateTodoSlice({ id, text: updatedText }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold">NotePad using Redux-toolkit </h1>
      <div>
        <input
          type="text"
          className="my-4 p-2 border-2 text-2xl"
          placeholder="Enter Text Here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border-2 border-black p-3 text-2xl font-bold"
          onClick={submitNow}
        >
          Enter
        </button>
        <div className="list">
          {todos.map((todo) => (
            <div className="flex gap-4" key={todo.id}>
              <li>
                {todo.text} - {todo.day}
              </li>
              <button
                style={{ color: "blue" }}
                onClick={() => updateButton(todo.id)}
              >
                Update
              </button>
              <button
                style={{ color: "red" }}
                onClick={() => deleteButton(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
