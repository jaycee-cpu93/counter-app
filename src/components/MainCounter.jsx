import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';
import '../styles/style.css';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { TbRosetteNumber9 } from 'react-icons/tb';
import { IoReload } from 'react-icons/io5';

const Counter = () => {
  const { count, incrementByOne, decrementByOne, reset, setValue } =
    useCounter();
  const countStyle = {
    color: count < 0 ? 'red' : 'blue',
  };
  return (
    <div className="counter">
      <div className="counter-bg">
        <div className="main-bg">
          <p>Count </p>
          <h1 style={countStyle}>{count}</h1>
          <div className="icons">
            <MdKeyboardArrowUp onClick={incrementByOne} className="arrow" />
            <MdKeyboardArrowDown onClick={decrementByOne} className="arrow" />
            <IoReload onClick={reset} className="arrow rotate" />
            <TbRosetteNumber9 onClick={() => setValue(9)} className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
