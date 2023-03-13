import { useDispatch } from "react-redux";
import { createTask } from "../actions";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const handleTasksCreate = () => {
    dispatch(createTask());
  };

  return (
    <div>
      <h1>lol</h1>

      <button onClick={handleTasksCreate}>asd</button>
    </div>
  );
};

export default TodoContainer;
