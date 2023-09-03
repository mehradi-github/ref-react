import { Fragment, useState } from "react";

const Counter = ({ initStart = 0 }) => {
  const [count, setCount] = useState(initStart);
  return (
    <Fragment>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </Fragment>
  );
};
export default Counter;
