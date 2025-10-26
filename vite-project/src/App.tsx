import type { JSX } from "react";
//import "./App.css";

import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Counter from "./components/Projects/Counter/Counter";
import Modal from "./components/Projects/Modal/Modal";


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Counter />} /> 
        <Route path="counter" element={<Counter />} />
         <Route path="modal" element={<Modal />} />
       

       
       


      </Route>
    </Routes>
  );
}

export default App;