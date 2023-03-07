import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  handleIncrement,
  handleReset,
  handleSubtraction,
  onDelete,
}) => {
  const isEven = counterValue % 2 === 0;

  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "green" : "blue" }}
    >
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.isEven}>
        {isEven ? "Введено чётное число" : "Введено нечётное число"}
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttons__button} onClick={handleSubtraction}>
          -
        </button>
        <button className={styles.buttons__button} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.buttons__button} onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className={styles.remove} onClick={onDelete}>
        Remove Counter
      </button>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubtraction: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default CounterView;
