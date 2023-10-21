import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementByOne = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return { count, incrementByOne, decrementByOne, reset, setValue };
};

export default useCounter;
