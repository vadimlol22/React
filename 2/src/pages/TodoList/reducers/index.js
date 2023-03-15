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
        done: false,
        edit: false,
      };

      copy.todos.unshift(newTask);

      return copy;
    },
    [actions.deleteTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const findIndex = copy.todos.findIndex(({ id }) => id === taskId);

      copy.todos.splice(findIndex, 1);

      return copy;
    },
    [actions.completeTodo]: (state, { payload: taskId }) => {
      const copy = structuredClone(state);

      const foundTodo = copy.todos.find(({ id }) => id === taskId);

      foundTodo.done = true;

      return copy;
    },
  },
  initialState
);

export default todosReducer;
