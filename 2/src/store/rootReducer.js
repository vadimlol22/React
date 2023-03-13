import { combineReducers } from "redux";
import tasksRedecer from "../pages/TodoList/reducers/index.js";

const rootReducer = () => {
  return combineReducers({
    todoPage: tasksRedecer,
  });
};

export default rootReducer;
