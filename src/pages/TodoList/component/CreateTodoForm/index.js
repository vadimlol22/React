import PropTypes from "prop-types";

import CustomInput from "../../../../commonComponents/CustomInput";

import styles from "./styles.module.scss";

const CreateTodoForm = ({ taskText, handleSubmit, handleChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__title}>Введите вашу задачу!</div>
        <form onSubmit={handleSubmit} className={styles.wrapper__form}>
          <CustomInput
            type="text"
            name="taskText"
            value={taskText}
            onChange={handleChange}
          />

          <button type="submit" className={styles.wrapper__form__btn}>
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

CreateTodoForm.propTypes = {
  taskText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CreateTodoForm;
