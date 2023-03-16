import styles from "./styles.module.scss";

import { useForm } from "../../../../commonComponents/hooks";

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
        <button
          className={styles.wrapper__btn_1}
          onClick={() => handleSave({ id, newText: form.taskText })}
        >
          Save
        </button>
        <button
          className={styles.wrapper__btn_2}
          onClick={() => handleCancel(id)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditableTodoItem;
