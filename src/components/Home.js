import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { Spotify, OW, Covid } from "../components";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavLink to='/spotify' exact>
          Spotify
        </NavLink>
        <NavLink to='/ow' exact>
          Overwatch
        </NavLink>
        <NavLink to='/covid' exact>
          Covid-19
        </NavLink>
        <Switch>
          <Route path='/spotify' component={Spotify} />
          <Route path='/ow' component={OW} />
          <Route path='/covid' component={Covid} />
        </Switch>
      </div>
    );
  }
}

export default Home;
