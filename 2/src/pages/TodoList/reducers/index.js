import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  todos: [],
};

const todosReducer = handleActions(
  {
    [actions.createTodo]: (state, { payload: taskData }) => {
      const copy = structuredClone(state);

      const newTask = {
        id: uuid(),
        text: taskData.taskText,
        isCompleted: false,
        isEditMode: false,
      };

      copy.todos.unshift(newTask);

      return copy;
    },
    [actions.deleteTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const findIndexElement = copy.todos.findIndex(({ id }) => id === taskId);

      copy.todos.splice(findIndexElement, 1);

      return copy;
    },
    [actions.completeTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTodo = copy.todos.find(({ id }) => id === taskId);

      foundTodo.isCompleted = !foundTodo.isCompleted;

      return copy;
    },
    [actions.editTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTodo = copy.todos.find(({ id }) => id === taskId);

      foundTodo.isEditMode = true;

      return copy;
    },
    [actions.undoTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTodo = copy.todos.find(({ id }) => id === taskId);

      foundTodo.isEditMode = false;

      return copy;
    },
    [actions.saveTodo]: (state, { payload: updatedTask }) => {
      const { id: taskId, newText } = updatedTask;

      const copy = structuredClone(state);

      const foundTodo = copy.todos.find(({ id }) => id === taskId);

      foundTodo.text = newText;

      foundTodo.isEditMode = false;

      return copy;
    },
  },
  initialState
);

export default todosReducer;
