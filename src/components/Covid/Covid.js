import React, { Component } from 'react';
import { CovidCards, CountryPicker, Chart } from '../../components';
import styles from './Covid.module.css'
import { fetchData } from '../../api/api';

class Covid extends Component {
    state = {
        data: {},
        country: ''
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    };

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <CovidCards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    };
};

export default Covid;