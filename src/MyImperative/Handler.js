import { useRef } from "react";
import Input from "./Input";

const Handler = () => {
  const refInput = useRef();
  return (
    <>
      <Input ref={refInput} />
      <button
        onClick={() => {
          refInput.current.reset();
        }}
      >
        reset
      </button>
    </>
  );
};

export default Handler;
