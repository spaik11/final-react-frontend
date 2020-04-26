import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Button } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";

const Profile = (props) => {
  const { setUserStatus } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get("/logout").then((response) => {
      console.log(response);
    });

    setUserStatus(false);
    props.history.push("/ow");
  };
  return (
    <div>
      <Button
        onClick={handleSubmit}
        variant='contained'
        color='primary'
        type='submit'>
        Log Out
      </Button>
    </div>
  );
};

export default Profile;
