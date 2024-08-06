import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: 1,
      text: "hello world",
      day: "8/06/2024",
    },
  ],
};

const addTodo = (state, action) => {
  state.todo.push({
    id: nanoid(),
    text: action.payload.text,
    day: action.payload.date, // Dynamic date
  });
};

const removeTodo = (state, action) => {
  state.todo = state.todo.filter((todo) => todo.id !== action.payload);
};

const updateTodo = (state, action) => {
  const { id, text } = action.payload;
  const todo = state.todo.find((todo) => todo.id === id);
  if (todo) {
    todo.text = text;
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodo,
    removeTodo: removeTodo,
    updateTodo: updateTodo,
  },
});

export const {
  addTodo: addTodoSlice,
  removeTodo: removeTodoSlice,
  updateTodo: updateTodoSlice,
} = todoSlice.actions;
export default todoSlice.reducer;
