import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { UserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#1D1F19",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
  },
}));

const Header = () => {
  const classes = useStyles();

  const { userStatus, userInfo } = useContext(UserContext);

  let user = !userStatus ? (
    <div>
      <Button color='inherit'>
        <NavLink style={{ color: "white" }} to='/login' exact>
          Login
        </NavLink>
      </Button>
      <Button color='inherit'>
        <NavLink style={{ color: "white" }} to='/register' exact>
          Register
        </NavLink>
      </Button>
    </div>
  ) : (
    <Button color='inherit'>Hello, {userInfo.name}</Button>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Code Immersives
          </Typography>
          <Button color='inherit'>
            <NavLink style={{ color: "white" }} to='/ow' exact>
              Overwatch
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink style={{ color: "white" }} to='/covid' exact>
              Covid-19
            </NavLink>
          </Button>
          {user}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
