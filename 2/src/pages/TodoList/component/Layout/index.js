import CreateTodoForm from "../CreateTodoForm";
import TodoItem from "../TodoItem";

import styles from "./styles.module.scss";

const Layout = ({
  id,
  todos,
  handleSubmit,
  taskText,
  handleChange,
  handleDelete,
  handleComplite,
  handleEdit,
}) => {
  return (
    <div>
      <CreateTodoForm
        handleSubmit={handleSubmit}
        taskText={taskText}
        handleChange={handleChange}
      />

      <div className={styles.todoArea}>
        {todos.map(
          ({ id, text, handleComplite, handleDelete, handleEdit }, index) => {
            return (
              <TodoItem
                id={id}
                key={id}
                handleComplite={handleComplite}
                taskText={text}
                taskNumber={index + 1}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Layout;
