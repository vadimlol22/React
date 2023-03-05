import { useCounter } from "../../../commonComponents/hooks";

import CounterView from "../component/CounterView";

const CounterContainer = () => {
  const { countValue, handleIncrement, handleReset, handleSubtraction } =
    useCounter(0);

  return (
    <CounterView
      counterValue={countValue}
      handleIncrement={handleIncrement}
      handleReset={handleReset}
      handleSubtraction={handleSubtraction}
    />
  );
};

export default CounterContainer;
