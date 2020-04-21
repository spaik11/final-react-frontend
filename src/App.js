import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Body, Sidebar } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.middle}>
        <Sidebar />
        <Body />
      </div>
    </BrowserRouter>
  );
}

export default App;
