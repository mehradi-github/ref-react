import "./App.css";
import MyPerformance from "./MyPerformance";
import MyHook from "./MyHook";
import { Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import Layout from "./Layout";
import Home from "./Home";
import Mylist from "./MyList";
import MyContext from "./MyContext";
import Handler from "./MyImperative/Handler";
import Counter from "./Counter";
import Reducer from "./Reducer";
import MyTimer from "./MyTimer";
import MyInput from "./MyInput";
import MyPortal from "./MyPortal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter initStart={8} />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="timer" element={<MyTimer />} />
          <Route path="refs" element={<MyInput />} />
          <Route path="imperative" element={<Handler />} />
          <Route path="contexts" element={<MyContext />} />
          <Route path="list" element={<Mylist />} />
          <Route path="performance" element={<MyPerformance />} />
          <Route path="hook" element={<MyHook />} />
          <Route path="portal" element={<MyPortal />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
