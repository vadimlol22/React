import PropTypes from "prop-types";

import CreateTodoForm from "../CreateTodoForm";
import EditableTodoItem from "../EditableTodoItem";
import TodoItem from "../TodoItem";

import styles from "./styles.module.scss";

const Layout = ({
  todos,
  handleSubmit,
  taskText,
  handleChange,
  handleTaskDelete,
  handleTaskComplete,
  handleTaskEdit,
  handleTaskCancel,
  handleTaskSave,
}) => {
  return (
    <div>
      <CreateTodoForm
        handleSubmit={handleSubmit}
        taskText={taskText}
        handleChange={handleChange}
      />

      <div className={styles.todoArea}>
        {todos.map(({ id, text, isCompleted, isEditMode }, index) => {
          return isEditMode ? (
            <EditableTodoItem
              key={id}
              taskText={text}
              taskNumber={index + 1}
              id={id}
              handleCancel={handleTaskCancel}
              handleSave={handleTaskSave}
            />
          ) : (
            <TodoItem
              id={id}
              key={id}
              handleComplete={handleTaskComplete}
              isCompleted={isCompleted}
              taskText={text}
              taskNumber={index + 1}
              handleDelete={handleTaskDelete}
              handleEdit={handleTaskEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

Layout.propTypes = {
  todos: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
  handleTaskComplete: PropTypes.func.isRequired,
  handleTaskEdit: PropTypes.func.isRequired,
  handleTaskCancel: PropTypes.func.isRequired,
  handleTaskSave: PropTypes.func.isRequired,
};

export default Layout;
