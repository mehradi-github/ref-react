import { useState } from "react";
import "./modal.css";
const MyPortal = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className="container">
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? "Show Modal" : "Hide Modal"}
        </button>
        {isHidden || <Modal />}
      </div>
      <p className="other">Other content</p>
    </>
  );
};

const Modal = () => {
  return <p className="modal">Modal</p>;
};

export default MyPortal;
