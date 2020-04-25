import React, { Component } from "react";
import axios from "axios";
import OWCards from "./OWCards/OWCards";
import styles from "./OW.module.css";
import { Grid } from "@material-ui/core";

class OW extends Component {
  state = {
    userData: [],
    owData: [],
  };

  loadUsers = () => {
    axios.get("/getallusers").then((response) => {
      this.setState({ userData: response.data });
    });
  };

  loadOWData = () => {
    let owId = this.state.userData.map((user) => user.owId);
    console.log(owId);
  };

  componentDidMount() {
    this.loadUsers();
    this.loadOWData();
  }

  render() {
    const { userData } = this.state;
    console.log("RENDER", userData);

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
          <h1>OW</h1>
        </Grid>
      </div>
    );
  }
}

export default OW;
