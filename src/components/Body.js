import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { OW, Covid, Register, Login } from "../components";
import styles from "./Body.module.css";

class Body extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route path='/ow' component={OW} />
          <Route path='/covid' component={Covid} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Body;
