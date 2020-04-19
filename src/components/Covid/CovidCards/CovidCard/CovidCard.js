import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const CovidCard = (props) => (
    <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
        <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>
                <CountUp 
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=','/>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of active cases of COVID-19 </Typography>
        </CardContent>
    </Grid>
);

export default CovidCard;