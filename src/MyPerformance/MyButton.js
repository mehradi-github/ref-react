import { memo } from "react";

const MyButton = memo((props) => {
  console.log("rendering MyButton");
  const start = new Date();
  while (new Date() - start < 1000) {}
  return <button {...props} style={{ color: "red" }}></button>;
});

export default MyButton;
