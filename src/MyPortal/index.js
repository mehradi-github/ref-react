import { useState } from "react";
import "./modal.css";
import { createPortal } from "react-dom";
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
  return createPortal(
    <p className="modal">Modal</p>,
    document.getElementById("modal-root")
  );
};

export default MyPortal;
