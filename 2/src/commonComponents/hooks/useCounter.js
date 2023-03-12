import { useState } from "react";

const useCounter = (startValue) => {
  const [countValue, setCountValue] = useState(startValue);

  const handleIncrement = () => {
    setCountValue(countValue + 1);
  };

  const handleReset = () => {
    setCountValue(0);
  };

  const handleSubtraction = () => {
    if (countValue > 0) {
      setCountValue(countValue - 1);
    }
  };

  return {
    countValue,
    handleIncrement,
    handleReset,
    handleSubtraction,
  };
};

export default useCounter;
