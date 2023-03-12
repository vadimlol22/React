import { useState } from "react";
import { v4 as uuid } from "uuid";

import Layout from "../components/Layout";

const PageContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    const newCounters = {
      id: uuid(),
      countValue: 0,
    };
    setCounters((state) => {
      const plusOne = state.map((counter) => {
        if (counter.countValue % 2 === 0) {
          return {
            ...counter,
            countValue: (counter.countValue += 1),
          };
        }
        return counter;
      });

      return [...plusOne, newCounters];
    });
  };

  const handleResetCounter = () => {
    setCounters([]);
  };

  const handleDeleteCounter = (id) => {
    setCounters((state) => {
      const copyCounters = structuredClone(counters);
      const findCounter = copyCounters.findIndex(
        (counter) => counter.id === id
      );
      copyCounters.splice(findCounter, 1);

      return copyCounters.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 !== 0
              ? counter.countValue - 1
              : counter.countValue,
        };
      });
    });
  };

  const handleIncrementCounter = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterRemove = countersCopy.find(({ id }) => counterId === id);

      counterRemove.countValue += 1;
      return countersCopy;
    });
  };

  const handleSubtractionCounter = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterRemove = countersCopy.find(({ id }) => counterId === id);

      if (counterRemove.countValue > 0) {
        counterRemove.countValue -= 1;
        return countersCopy;
      }

      return countersCopy;
    });
  };

  const handleResetValueCounter = (counterId) => {
    setCounters((state) => {
      const countersCopy = structuredClone(state);
      const counterRemove = countersCopy.find(({ id }) => counterId === id);

      counterRemove.countValue = 0;
      return countersCopy;
    });
  };

  const allSum = counters.reduce(
    (result, { countValue }) => result + countValue,
    0
  );

  return (
    <Layout
      counterValue={counters.countValue}
      counters={counters}
      handleResetCounter={handleResetCounter}
      handleAddCounter={handleAddCounter}
      handleDeleteCounter={handleDeleteCounter}
      handleIncrementCounter={handleIncrementCounter}
      handleSubtractionCounter={handleSubtractionCounter}
      handleResetValueCounter={handleResetValueCounter}
      allSum={allSum}
    />
  );
};

export default PageContainer;
