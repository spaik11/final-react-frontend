import React, { Component } from 'react';
import OWCards from './OWCards/OWCards';
import styles from './OW.module.css';
import { Grid } from '@material-ui/core';
import { fetchUsers } from '../../api/api';

class OW extends Component {
    state = {
        userData: [],
    };

    async componentDidMount() {
        const fetchedUsers = await fetchUsers();

        this.setState({ userData: fetchedUsers });
    };

    render() {
        let { userData } = this.state;

        return (
            <div className={styles.container}>
                <Grid container spacing={3} justify='center'>
                    <OWCards users={userData} />
                </Grid>
            </div>
        )
    }
}

export default OW;