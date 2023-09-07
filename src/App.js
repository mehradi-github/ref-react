import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Reducer from "./Reducer";
import MyTimer from "./MyTimer";
import MyInput from "./MyInput";
import Handler from "./MyImperative/Handler";
import MyContext from "./MyContext";
import Mylist from "./MyList";
import MyPerformance from "./MyPerformance";
import MyHook from "./MyHook";

function App() {
  const error = true;
  const props = {
    id: "input",
    maxlenght: "3",
    type: "text",
  };

  const Hello = ({ name = "user" }) => {
    return <h1>Hello {name}</h1>;
  };
  const Comment = ({ username, time, children }) => {
    return (
      <selection>
        <p>
          {username} comment at {time}
        </p>
        {children}
      </selection>
    );
  };
  const handleClick = (event) => {
    console.log(event);
  };
  function MyButton(props) {
    return <button {...props} style={{ color: "red" }} />;
  }
  return (
    <>
      <h1>Writing Custom Hooks</h1>
      <MyHook />
      <h1>Performance</h1>
      <MyPerformance />

      <h1>MyList</h1>
      <Mylist />
      <h1>Contexts</h1>
      <MyContext />

      <h1>Imperative React</h1>
      <Handler />

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

      <MyButton onClick={handleClick}>Click Me</MyButton>
      <Counter initStart={8} />
      <Reducer />
      <MyTimer />
      <MyInput />
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
