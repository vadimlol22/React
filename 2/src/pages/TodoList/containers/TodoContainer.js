import { useForm } from "../../../commonComponents/hooks";

import { useDispatch, useSelector } from "react-redux";

import { completeTodo, createTodo, deleteTodo } from "../actions";
import { todosSelector } from "../selectors";

import Layout from "../component/Layout";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(todosSelector);

  const { form, handleReset, handleChange } = useForm({ taskText: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTodo(form));
    handleReset();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplite = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <Layout
      todos={todos}
      taskText={form.taskText}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      handleComplite={handleComplite}
    />
  );
};

export default TodoContainer;
