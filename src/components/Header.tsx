// Core
import React, { FC, useState } from 'react';

type PropTypes = {
  title?: string;
  children?: never;
}

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const [counter, setCounter] = useState(0);
  const content = typeof title === 'string' ? title.toLowerCase() : null;

  const onIncrease = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onDecrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <p>{counter.toFixed()}</p>
      <button type="button" onClick={onIncrease}>+</button>
      <button type="button" onClick={onDecrease}>-</button>
    </>
  );
};

Header.defaultProps = {
  title: 'Hello',
};
