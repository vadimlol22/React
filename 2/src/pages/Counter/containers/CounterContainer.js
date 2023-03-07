// import { useCounter } from "../../../commonComponents/hooks";
import CounterView from "../component/CounterView";

import { useCounter } from "../../../commonComponents/hooks";

const CounterContainer = ({ onDelete }) => {
  const { countValue, handleIncrement, handleReset, handleSubtraction } =
    useCounter(0);

  return (
    <CounterView
      counterValue={countValue}
      handleIncrement={handleIncrement}
      handleReset={handleReset}
      handleSubtraction={handleSubtraction}
      onDelete={onDelete}
    />
  );
};

export default CounterContainer;
