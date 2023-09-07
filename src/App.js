import "./App.css";
import MyPerformance from "./MyPerformance";
import MyHook from "./MyHook";
import { Routes, Route } from "react-router-dom";
import NoPage from "./NoPage";
import Layout from "./Layout";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hook" element={<MyHook />} />
          <Route path="performance" element={<MyPerformance />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
