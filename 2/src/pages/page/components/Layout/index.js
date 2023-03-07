import CounterContainer from "../../../Counter/containers/CounterContainer";

const Layout = ({
  counters,
  handleAddCounter,
  handleResetCounter,
  handleDeleteCounter,
}) => {
  return (
    <div>
      <div>Количество счетчиков : {counters.length}</div>
      <button onClick={handleAddCounter}>Add Counter</button>
      <button onClick={handleResetCounter}>Reset</button>

      {counters.map(({ id }) => (
        <CounterContainer
          key={id}
          id={id}
          onDelete={() => handleDeleteCounter(id)}
        />
      ))}
    </div>
  );
};

export default Layout;
