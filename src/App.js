import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Body, Sidebar } from "./components";
import { UserProvider } from "./components/UserContext";
import styles from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <div className={styles.middle}>
          <Sidebar />
          <Body />
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
