import CounterView from "../../../Counter/component/CounterView";
// import CounterContainer from "../../../Counter/containers/CounterContainer";

const Layout = ({
  counters,
  handleAddCounter,
  handleResetCounter,
  handleDeleteCounter,
  handleIncrementCounter,
  handleSubtractionCounter,
  handleResetValueCounter,
  allSum,
}) => {
  return (
    <div>
      <div>Количество счетчиков : {counters.length}</div>
      <div>Сумма значений счетчиков : {allSum}</div>
      <div>
        Среднее значение :{" "}
        {counters.length === 0 ? 0 : allSum / counters.length}
      </div>
      <button onClick={handleAddCounter}>Add Counter</button>
      <button onClick={handleResetCounter}>Reset</button>

      {counters.map(({ id, countValue }) => (
        <CounterView
          id={id}
          key={id}
          counterValue={countValue}
          handleIncrement={() => handleIncrementCounter(id)}
          handleReset={() => handleResetValueCounter(id)}
          handleSubtraction={() => handleSubtractionCounter(id)}
          onDelete={() => handleDeleteCounter(id)}
        />
      ))}
    </div>
  );
};

export default Layout;
