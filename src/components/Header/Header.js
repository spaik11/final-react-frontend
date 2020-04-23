import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

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

export default function ButtonAppBar() {
  const classes = useStyles();

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
          <Button color='inherit'>
            <NavLink style={{ color: "white" }} to='/register' exact>
              Register
            </NavLink>
          </Button>
          <Button color='inherit'>
            <NavLink style={{ color: "white" }} to='/login' exact>
              Login
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
