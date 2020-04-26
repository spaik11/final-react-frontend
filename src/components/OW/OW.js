import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { fetchOwData } from "../../api/api";
import OWCards from "./OWCards/OWCards";
import styles from "./OW.module.css";
import { Grid } from "@material-ui/core";

class OW extends Component {
  state = {
    userData: [],
    owData: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("/getallusers");
    const owCall = await fetchOwData(data);

    this.setState({ owData: owCall });
    this.setState({ userData: data });
  }

  render() {
    const { owData } = this.state;
    console.log("RENDER", owData);
    let renderUsers =
      owData.length > 0 ? (
        <OWCards users={owData} />
      ) : (
        <Loader type='Puff' color='#00BFFF' height={100} width={100} />
      );

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
          {renderUsers}
        </Grid>
      </div>
    );
  }
}

export default OW;
