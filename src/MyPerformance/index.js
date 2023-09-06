import { useState, useMemo, useCallback, lazy, Suspense } from "react";
const MyButton = lazy(() => import("./MyButton"));
const MyPerformance = () => {
  const [num, setNum] = useState(10);
  const [log, setLog] = useState("");

  const fibValue = useMemo(() => {
    console.log("calcualting fib value");
    return fib(num);
  }, [num]);

  const onClickLog = useCallback(() => {
    console.log(log);
  }, [log]);
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
      {log.length > 0 ? (
        <Suspense fallback=" Loading ...">
          <MyButton onClick={onClickLog}>Log</MyButton>
        </Suspense>
      ) : null}
    </>
  );
};

const fib = (n) => {
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
};
export default MyPerformance;
