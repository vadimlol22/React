import { useState } from "react";
import { v4 as uuid } from "uuid";

import Layout from "../components/Layout";

const PageContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = (countValue) => {
    const newCounters = {
      id: uuid(),
      counterValue: countValue,
    };
    setCounters((state) => [...counters, newCounters]);

    console.log(counters);
  };

  const handleResetCounter = () => {
    setCounters([]);
  };

  const handleDeleteCounter = (id) => {
    const copyCounters = [...counters];
    const findCounter = copyCounters.findIndex((counter) => counter.id === id);

    copyCounters.splice(findCounter, 1);

    setCounters(copyCounters);
  };

  return (
    <Layout
      counters={counters}
      handleResetCounter={handleResetCounter}
      handleAddCounter={handleAddCounter}
      handleDeleteCounter={handleDeleteCounter}
    />
  );
};

export default PageContainer;
