import { forwardRef, useRef } from "react";

const MyInput = () => {
  const inputRef = useRef(null);

  return (
    <>
      <CustomInput ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focuse
      </button>
    </>
  );
};
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={{ color: "red" }} />;
});

export default MyInput;
