import React, { Component } from "react";
import axios from "axios";
import { fetchOwData } from "../../api/api";
import { OWCards } from "../../components";
import styles from "./OW.module.css";
import { Grid } from "@material-ui/core";

class OW extends Component {
  state = {
    owData: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("/getallusers");
    const owCall = await fetchOwData(data);

    this.setState({ owData: owCall });
  }

  render() {
    const { owData } = this.state;

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
          <OWCards users={owData} />
        </Grid>
      </div>
    );
  }
}

export default OW;
