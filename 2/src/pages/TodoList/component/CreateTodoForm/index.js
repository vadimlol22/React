import styles from "./styles.module.scss";

const CreateTodoForm = ({ taskText, handleSubmit, handleChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__title}>Введите вашу задачу!</div>
        <form onSubmit={handleSubmit} className={styles.wrapper__form}>
          <input
            type="text"
            name="taskText"
            value={taskText}
            onChange={handleChange}
            className={styles.wrapper__form__input}
          />

          <button type="submit" className={styles.wrapper__form__btn}>
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodoForm;
