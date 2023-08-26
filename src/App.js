import logo from "./logo.svg";
import "./App.css";

function App() {
  const error = true;
  const props = {
    id: "input",
    maxLenght: "3",
    type: "text",
  };
  return (
    <>
      {error && <h1>Error</h1>}
      {error || <h1>Success</h1>}

      <lable htmlFor="input">Input:</lable>
      <input {...props} placeholder="User" />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
