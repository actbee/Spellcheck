import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Main from "./components/main/main";
import Error from "./components/error";

function App() {
  return (
    <div className="App">
     
        <Routes>
           <Route path = "/"  element = {<Main />}/>
           <Route element = {<Error />} />
        </Routes>
    </div>
  );
}

export default App;
