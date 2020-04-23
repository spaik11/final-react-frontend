import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Body, Sidebar } from "./components";
import styles from "./App.module.css";

const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <BrowserRouter>
      <Header loggedInStatus={userStatus} userInfo={userInfo} />
      <div className={styles.middle}>
        <Sidebar />
        <Body />
      </div>
    </BrowserRouter>
  );
};

export default App;
