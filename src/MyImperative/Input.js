import { forwardRef, useState, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    return { reset: () => setValue("") };
  });
  return (
    <>
      <input
        value={value}
        {...props}
        ref={ref}
        onChange={(e) => setValue(e.target.value)}
        style={{ color: "red" }}
      />
    </>
  );
});

export default Input;
