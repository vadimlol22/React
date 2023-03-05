import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const CounterView = ({
  counterValue,
  isEven,
  handleIncrement,
  handleReset,
  handleSubtraction,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ background: isEven ? "green" : "red" }}
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
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSubtraction: PropTypes.func.isRequired,
  isEven: PropTypes.bool.isRequired,
};
