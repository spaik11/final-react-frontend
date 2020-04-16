import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        userData: []
    };

    loadUsers = () => {
        axios.get('/getallusers')
            .then((response) => {
                console.log('first call', response.data.users);
                this.setState({ userData: response.data.users})
            })
    };

    componentDidMount() {
        this.loadUsers();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.userData === this.state.userData) {
            return this.loadUsers();
        };
    }

    render() {
        let allPlayers = this.state.userData.map((player) => <h1>{player.name}</h1>)

        return(
            <div>
                <h1>OW Players</h1>
                {allPlayers}
            </div>
        )
    }
}

export default Home;