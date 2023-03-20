import PropTypes from "prop-types";

import CustomButton from "../../../../commonComponents/CustomButton";
import CustomIconButton from "../../../../commonComponents/CustomIconButton";

import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  isCompleted,
  taskNumber,
  taskText,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className={isCompleted ? styles.wrapper_completed : styles.wrapper}>
      <div className={styles.wrapper__text}>{taskNumber}</div>
      <div className={isCompleted ? styles.completed : styles.wrapper__text}>
        {taskText}
      </div>
      <div className={styles.wrapper__btn}>
        <CustomButton
          text={"Complete"}
          color="success"
          onClick={() => handleComplete(id)}
        />
        <CustomButton
          text={"Edit"}
          color="warning"
          onClick={() => handleEdit(id)}
        />
        <CustomIconButton onClick={() => handleDelete(id)} color="error" />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  taskNumber: PropTypes.number.isRequired,
  taskText: PropTypes.string.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
