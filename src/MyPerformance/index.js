import { useState, useMemo } from "react";
import MyButton from "./MyButton";
const MyPerformance = () => {
  const [num, setNum] = useState(10);
  const [log, setLog] = useState("");

  const fibValue = useMemo(() => {
    console.log("calcualting fib value");
    return fib(num);
  }, [num]);
  return (
    <>
      <p>
        Fib {num} is {fibValue}
      </p>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <input type="text" value={log} onChange={(e) => setLog(e.target.value)} />
      <MyButton
        onClick={() => {
          console.log(log);
        }}
      >
        Log
      </MyButton>
    </>
  );
};

const fib = (n) => {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
};
export default MyPerformance;