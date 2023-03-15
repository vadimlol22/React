import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  done,
  taskNumber,
  taskText,
  handleComplite,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__text}>{taskNumber}</div>
      <div className={done ? styles.completed : styles.wrapper__text}>
        {taskText}
      </div>
      <div className={styles.wrapper__btn}>
        <button
          className={styles.wrapper__btn_1}
          onClick={() => handleEdit(id)}
        >
          Edit
        </button>
        <button
          className={styles.wrapper__btn_2}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
        <button
          className={styles.wrapper__btn_3}
          onClick={() => handleComplite(id)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
