import { createAction } from "redux-actions";

export const createTask = createAction("CREATE_TASK");
export const deleteTask = createAction("DELETE_TASK");
export const completedTask = createAction("COMPLETED_TASK");
export const editTask = createAction("EDIT_TASK");
export const cancelChange = createAction("CANCEL_CHANGE");
export const addChange = createAction("ADD_CHANGE");
