import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLay from "./Layout/MainLayout/mainLay";
import Add from "./Pages/Add/add";
import Detail from "./Pages/Detail/detail";
import Home from "./Pages/Home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLay />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/:id" element={<Detail/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
