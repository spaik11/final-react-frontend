import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Body } from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
