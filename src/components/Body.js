import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { OW, Covid } from "../components";
import styles from "./Body.module.css";

class Body extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavLink to='/ow' exact>
          Overwatch
        </NavLink>
        <NavLink to='/covid' exact>
          Covid-19
        </NavLink>
        <Switch>
          <Route path='/ow' component={OW} />
          <Route path='/covid' component={Covid} />
        </Switch>
      </div>
    );
  }
}

export default Body;
