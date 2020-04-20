import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import styles from "./OWCard.module.css";

const OWCard = (props) => {
  return (
    <div className={styles.container}>
      <Card variant='outlined'>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            {props.name}
          </Typography>
          <Typography variant='h5' component='h2'>
            Rank
          </Typography>
          <Typography color='textSecondary'>{props.overwatch}</Typography>
          <Typography variant='body2' component='p'>
            Tank
            <br />
            DPS
            <br />
            Healer
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default OWCard;
