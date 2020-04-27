import React, { useContext } from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import cx from "classnames";
import { UserContext } from "../../../UserContext";

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    margin: 20,
  },
  media: {
    height: 140,
  },
  card: {
    textAlign: "center",
    margin: "auto",
  },
  rank: {
    height: 20,
    width: 20,
    alignItems: "center",
    margin: "auto",
  },
  loggedUser: {
    border: "2px solid black",
  },
});

const OWCard = (props) => {
  const { userStatus, userInfo } = useContext(UserContext);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={cx(
        classes.root,
        userStatus &&
          userInfo.owId.toLowerCase() ===
            props.name.replace("#", "-").toLowerCase()
          ? classes.loggedUser
          : null
      )}>
      <CardMedia
        className={classes.media}
        image={props.portrait}
        title='Overwatch'
      />
      <CardContent className={classes.card}>
        <Typography gutterBottom variant='h5' component='h2'>
          {props.name.slice(0, props.name.indexOf("#")).toUpperCase()}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          Tank {bull} <CountUp start={0} end={props.tankRank} duration={2.5} />
        </Typography>
        <CardMedia
          className={classes.rank}
          image={props.tankImg}
          title='rank'
        />
        <Typography variant='body2' color='textSecondary' component='p'>
          Damage {bull} <CountUp start={0} end={props.dmgRank} duration={2.5} />
        </Typography>
        <CardMedia className={classes.rank} image={props.dmgImg} title='rank' />
        <Typography variant='body2' color='textSecondary' component='p'>
          Support {bull}{" "}
          <CountUp start={0} end={props.sptRank} duration={2.5} />
        </Typography>
        <CardMedia className={classes.rank} image={props.sptImg} title='rank' />
      </CardContent>
    </Card>
  );
};

export default OWCard;
