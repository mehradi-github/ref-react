import { useState, useRef, useEffect } from "react";

const MyHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const prevCount = usePrev(count);
  const prevText = usePrev(text);
  return (
    <>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <div>Previous count:{prevCount}</div>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <p>Previous Text: {prevText}</p>
      </div>
    </>
  );
};
export default MyHook;

function usePrev(value) {
  const refPerv = useRef();
  useEffect(() => {
    refPerv.current = value;
  }, [value]);
  return refPerv.current;
}
