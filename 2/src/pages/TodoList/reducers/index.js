import { handleActions } from "redux-actions";

import * as actions from "../actions";

import { v4 as uuid } from "uuid";

const initialState = {
  tasks: [],
};

const tasksRedecer = handleActions(
  {
    [actions.createTask]: (state, { payload }) => {
      const newTask = {
        id: uuid(),
        task: payload,
        done: false,
        edit: false,
      };

      const stateCopy = structuredClone(state);

      stateCopy.tasks.push(newTask);

      return stateCopy;
    },
  },
  initialState
);

export default tasksRedecer;
