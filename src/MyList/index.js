import { Fragment, useState } from "react";

const Mylist = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          setList([...list, item]);
          setItem("");
        }}
      >
        Add
      </button>
      <ul>
        {list.map((l, i) => {
          return (
            <Fragment key={i}>
              <li>{l}</li>
              <li>Test</li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
};
export default Mylist;
