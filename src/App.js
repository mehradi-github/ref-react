import logo from "./logo.svg";
import "./App.css";

function App() {
  const error = true;

  return (
    <>
      {error && <h1>Error</h1>}
      {error || <h1>Success</h1>}

      <lable htmlFor="input">Input:</lable>
      <input type="text" id="input" maxLength="3" />
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
