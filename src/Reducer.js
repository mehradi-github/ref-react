import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.num };
    case "decrement":
      return { count: state.count - action.num };
    default:
      throw new Error("unknow action type");
  }
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button onClick={() => dispatch({ type: "increment", num: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", num: 1 })}>
        decrement
      </button>

      <h1>{state.count}</h1>
    </>
  );
};
export default Reducer;
