import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Grid } from '@material-ui/core';
import styles from './OWCard.module.css';

const OWCard = (props) => {
    return (
        <Grid item xs={12} md={3} component={OWCard} className={styles.card}>
            <Card  variant="outlined">
            <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {props.name}
            </Typography>
            <Typography variant="h5" component="h2">
                Rank
            </Typography>
            <Typography  color="textSecondary">
                {props.overwatch}
            </Typography>
            <Typography variant="body2" component="p">
                Tank
                <br />
                DPS
                <br />
                Healer
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </Grid>
    )
}



export default OWCard;