import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { OW, Covid, Register, Login, Profile } from "../components";
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
          <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default Body;
