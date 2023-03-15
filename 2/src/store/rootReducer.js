import { combineReducers } from "redux";
import todosReducer from "../pages/TodoList/reducers/index.js";

const rootReducer = () => {
  return combineReducers({
    todoPage: todosReducer,
  });
};

export default rootReducer;
