import React, { Component } from "react";
import axios from "axios";
import OWCards from "./OWCards/OWCards";
import styles from "./OW.module.css";
import { Grid } from "@material-ui/core";

class OW extends Component {
  state = {
    userData: [],
  };

  loadUsers = () => {
    axios.get("/getallusers").then((response) => {
      this.setState({ userData: response.data.users });
    });
  };

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const { userData } = this.state;

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
          {userData.length > 0 ? <OWCards users={this.state.userData} /> : null}
        </Grid>
      </div>
    );
  }
}

export default OW;
