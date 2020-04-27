import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const fetchCovidData = async (country) => {
  let changeUrl = url;

  if (country) {
    changeUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeUrl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCovidDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCovidCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchOwData = (users) => {
  try {
    let owPlayersData = [];
    users
      .filter(({ owId }) => owId !== "")
      .map(({ owId }) => {
        return axios
          .get(`https://ovrstat.com/stats/pc/${owId}`)
          .then(({ data }) => {
            return owPlayersData.push(data);
          });
      });
    return owPlayersData;
  } catch (error) {
    console.log(error);
  }
};
