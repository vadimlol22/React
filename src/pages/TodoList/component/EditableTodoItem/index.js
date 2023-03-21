import PropTypes from "prop-types";

import { useForm } from "../../../../commonComponents/hooks";
import CustomButton from "../../../../commonComponents/CustomButton";

import styles from "./styles.module.scss";

const EditableTodoItem = ({
  id,
  taskNumber,
  taskText,
  handleSave,
  handleCancel,
}) => {
  const { form, handleChange } = useForm({ taskText: taskText });

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__text}>{taskNumber}</div>
      <input
        className={styles.input}
        type="text"
        value={form.taskText}
        name="taskText"
        onChange={handleChange}
      />
      <div className={styles.wrapper__btn}>
        <CustomButton
          text={"Save"}
          color="success"
          onClick={() => handleSave({ id, newText: form.taskText })}
        />
        <CustomButton
          text={"Cancel"}
          color="warning"
          onClick={() => handleCancel(id)}
        />
      </div>
    </div>
  );
};

// Типизация
EditableTodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  taskNumber: PropTypes.number.isRequired,
  taskText: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditableTodoItem;
