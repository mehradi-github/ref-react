import { useRef, useState } from "react";
const MyTimer = () => {
  const [second, setSecond] = useState(0);
  const timerId = useRef(null);
  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timerId.current);
  };
  return (
    <>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <h3>seconds:{second}</h3>
    </>
  );
};

export default MyTimer;
