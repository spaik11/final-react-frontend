import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  rank: {
    height: 20,
    width: 20,
  },
});

const OWCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.portrait}
          title='Overwatch'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.userName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Tank: {props.tankRank}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Damage: {props.dmgRank}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Support: {props.sptRank}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OWCard;
