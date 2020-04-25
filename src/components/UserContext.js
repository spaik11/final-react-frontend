import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userStatus, setUserStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider
      value={{ userStatus, setUserStatus, userInfo, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  );
};
