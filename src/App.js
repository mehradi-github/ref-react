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

      <lable
        style={{
          paddingLeft: "10px",
          fontFamily: "sans-serif",
          fontWeight: "Bold",
          fontSize: "14px",
        }}
        htmlFor="input"
      >
        Input:
      </lable>
      <input {...props} placeholder="User" />

      <Hello name="name1" />
      <Hello name="name2" />
      <Hello />
      <Comment username="Alex" time={new Date().toString()}>
        <h1>Hello Worls</h1>
      </Comment>
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
function Hello({ name = "user" }) {
  return <h1>Hello {name}</h1>;
}
function Comment({ username, time, children }) {
  return (
    <selection>
      <p>
        {username} comment at {time}
      </p>
      {children}
    </selection>
  );
}
export default App;
