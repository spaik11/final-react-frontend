import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Random App
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
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
